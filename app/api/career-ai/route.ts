import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import {
  CareerAIRequest,
  CareerPlan,
  CareerPathResponse,
  CopilotResponse,
  SkillMatchResponse,
  SkillMatchResult,
  SkillMatchOpportunityInput,
  CopilotContext,
  ErrorResponse,
  CareerAIResponse,
} from "@/app/types/career";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

// System prompt for career path generation
const CAREER_PATH_SYSTEM = `You are an expert career counselor helping individuals design detailed, actionable career paths.

Your task is to return ONLY valid JSON (no markdown, no extra text) with this exact structure:
{
  "goal": "The career goal",
  "summary": "A short 1-2 sentence explanation of this career direction",
  "skills": [
    {
      "name": "Skill name",
      "priority": "high|medium|low",
      "reason": "Why this skill matters for this career"
    }
  ],
  "learning": [
    {
      "title": "Learning topic or course",
      "description": "What this teaches and why it's relevant"
    }
  ],
  "projects": [
    {
      "title": "Project name",
      "description": "What you'd build and what it demonstrates"
    }
  ],
  "credentials": [
    {
      "title": "Certification or credential",
      "description": "What this credential validates"
    }
  ],
  "opportunities": [
    {
      "title": "Job title or opportunity type",
      "type": "Job|Internship|Project|Freelance",
      "description": "Description of this opportunity type"
    }
  ]
}

Guidelines:
- Prioritize practical, in-demand skills
- Connect skills to learning paths
- Recommend realistic, achievable projects
- Focus on foundational credentials first
- Include 3-5 items in each category
- Be specific but not prescriptive
- Do NOT claim access to real SOLO jobs/opportunities beyond "Job", "Internship", "Project", "Freelance" types
- Tailor recommendations to the specific career goal`;

// System prompt for skill match evaluation
const SKILL_MATCH_SYSTEM = `You are an expert AI Career Match Evaluator for SOLO.
Your role is to analyze a candidate's self-reported skills against a specific job opportunity's description and core requirements.
You provide an objective, educational preview of how their current skill set aligns with the role.

Return ONLY valid JSON (no markdown, no backticks, no extra text) with this exact structure:
{
  "matchPercentage": 72,
  "matchedSkills": [
    {
      "name": "Skill name",
      "reason": "Clear explanation of how candidate's skill satisfies the requirement"
    }
  ],
  "partialSkills": [
    {
      "name": "Skill name",
      "reason": "Candidate has related skill or foundational knowledge, but needs strengthening for this role"
    }
  ],
  "missingSkills": [
    {
      "name": "Skill name",
      "reason": "Essential requirement not represented in candidate's skills"
    }
  ],
  "summary": "A constructive 1-2 sentence assessment of their readiness and key areas to bridge.",
  "nextSteps": [
    "Action step 1",
    "Action step 2",
    "Action step 3"
  ]
}

Guidelines:
- Compute a realistic matchPercentage (integer between 15 and 95) based on how well the candidate's skills cover the opportunity's core requirements. Do not output a random or hardcoded score.
- If user has all or almost all required skills, score should be high (82-95). If very few, score should be lower (20-45). If moderate overlap, score between 50-80.
- Recognize close equivalents (e.g., React candidate partially matches Next.js; Python candidate partially matches Data Analysis; Figma matches UI Design).
- Highlight 1 to 4 items in matchedSkills, partialSkills, and missingSkills.
- Provide exactly 3 concise, highly actionable recommendations in nextSteps.
- Label: AI Skill Match Preview. Keep the tone encouraging, constructive, and realistic.`;

// System prompt for copilot conversations
const COPILOT_SYSTEM = `You are SOLO Career Copilot, a supportive career guidance assistant.

Your role:
- Help learners explore career goals
- Recommend skills, learning paths, projects, and credentials
- Answer questions about career development
- Personalize advice using the provided career context and skill match evaluation
- Be encouraging and actionable

Guidelines:
- Keep responses concise (2-3 sentences)
- Answer based on the provided career context and skill match when available
- Explain WHY recommendations matter
- Focus on immediate next steps
- Never claim guaranteed employment
- Distinguish between personalized guidance and real platform data
- Be honest about skill gaps and timeframes`;

function isCareerPathRequest(
  req: CareerAIRequest
): req is Extract<CareerAIRequest, { type: "career-path" }> {
  return req.type === "career-path";
}

function isSkillMatchRequest(
  req: CareerAIRequest
): req is Extract<CareerAIRequest, { type: "skill-match" }> {
  return req.type === "skill-match";
}

async function generateCareerPath(goal: string): Promise<CareerPlan> {
  const prompt = `Create a detailed career path for someone who wants to: ${goal}

Focus on making the path practical and achievable. Return ONLY the JSON object, no other text.`;

  const response = await groq.chat.completions.create({
    model: MODEL,
    max_completion_tokens: 2000,
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content: CAREER_PATH_SYSTEM,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    throw new Error("Empty response from Groq");
  }

  const careerPlan: CareerPlan = JSON.parse(content.trim());

  if (
    !careerPlan.goal ||
    !careerPlan.summary ||
    !Array.isArray(careerPlan.skills) ||
    !Array.isArray(careerPlan.learning) ||
    !Array.isArray(careerPlan.projects) ||
    !Array.isArray(careerPlan.credentials) ||
    !Array.isArray(careerPlan.opportunities)
  ) {
    throw new Error("Invalid career plan structure from AI");
  }

  return careerPlan;
}

async function generateSkillMatch(
  opportunity: SkillMatchOpportunityInput,
  skills: string[]
): Promise<SkillMatchResult> {
  const prompt = `Evaluate the candidate's skills against this target opportunity.

Target Opportunity:
Title: ${opportunity.title}
Description: ${opportunity.description}
Key Requirements: ${opportunity.requirements.join(", ")}

Candidate's Entered Skills:
${skills.join(", ")}

Evaluate the skill match and return ONLY the JSON evaluation matching the exact schema.`;

  const response = await groq.chat.completions.create({
    model: MODEL,
    max_completion_tokens: 1500,
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content: SKILL_MATCH_SYSTEM,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("Empty response from Groq");
  }

  const result = JSON.parse(content.trim());

  if (
    typeof result.matchPercentage !== "number" ||
    !Array.isArray(result.matchedSkills) ||
    !Array.isArray(result.partialSkills) ||
    !Array.isArray(result.missingSkills) ||
    typeof result.summary !== "string" ||
    !Array.isArray(result.nextSteps)
  ) {
    throw new Error("Invalid skill match evaluation structure from AI");
  }

  const clampedPercentage = Math.min(100, Math.max(10, Math.round(result.matchPercentage)));

  return {
    matchPercentage: clampedPercentage,
    matchedSkills: result.matchedSkills,
    partialSkills: result.partialSkills,
    missingSkills: result.missingSkills,
    summary: result.summary,
    nextSteps: result.nextSteps,
    opportunityTitle: opportunity.title,
  };
}

function isPlainCareerPlan(ctx: CopilotContext): ctx is CareerPlan {
  return (
    typeof ctx === "object" &&
    ctx !== null &&
    "skills" in ctx &&
    Array.isArray((ctx as CareerPlan).skills)
  );
}

async function generateCopilotResponse(
  message: string,
  context: CopilotContext
): Promise<string> {
  let contextStr = "";

  if (isPlainCareerPlan(context)) {
    contextStr += `
Current Career Goal: ${context.goal || "None specified"}
Summary: ${context.summary || "None"}

Current Plan:
- Skills: ${context.skills.map((s) => s.name).join(", ") || "None yet"}
- Learning: ${context.learning.map((l) => l.title).join(", ") || "None yet"}
- Projects: ${context.projects.map((p) => p.title).join(", ") || "None yet"}
- Credentials: ${context.credentials.map((c) => c.title).join(", ") || "None yet"}
- Opportunities: ${context.opportunities.map((o) => o.title).join(", ") || "None yet"}
`;
  } else {
    const careerPlan = context.careerPlan;
    const skillMatch = context.skillMatch;

    if (careerPlan && careerPlan.goal) {
      contextStr += `
Current Career Goal: ${careerPlan.goal}
Summary: ${careerPlan.summary}

Current Plan:
- Skills: ${careerPlan.skills.map((s) => s.name).join(", ") || "None yet"}
- Learning: ${careerPlan.learning.map((l) => l.title).join(", ") || "None yet"}
- Projects: ${careerPlan.projects.map((p) => p.title).join(", ") || "None yet"}
- Credentials: ${careerPlan.credentials.map((c) => c.title).join(", ") || "None yet"}
- Opportunities: ${careerPlan.opportunities.map((o) => o.title).join(", ") || "None yet"}
`;
    }

    if (skillMatch) {
      contextStr += `
Skill Match Analysis Preview:
Target Role: ${skillMatch.opportunityTitle || "Selected Opportunity"}
Match Score: ${skillMatch.matchPercentage}%
Summary: ${skillMatch.summary}
Matched Skills: ${skillMatch.matchedSkills?.map((s) => `${s.name} (${s.reason})`).join("; ") || "None"}
Developing Skills: ${skillMatch.partialSkills?.map((s) => `${s.name} (${s.reason})`).join("; ") || "None"}
Skills to Develop / Missing: ${skillMatch.missingSkills?.map((s) => `${s.name} (${s.reason})`).join("; ") || "None"}
Recommended Next Steps: ${skillMatch.nextSteps?.join("; ") || "None"}
`;
    }
  }

  if (!contextStr.trim()) {
    contextStr = "No prior career plan or skill match data submitted yet. Provide general career guidance.";
  }

  const response = await groq.chat.completions.create({
    model: MODEL,
    max_completion_tokens: 500,
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: COPILOT_SYSTEM,
      },
      {
        role: "user",
        content: `Career Context:\n${contextStr}\n\nLearner Question: ${message}`,
      },
    ],
  });

  const messageContent = response.choices[0]?.message?.content;

  if (!messageContent) {
    throw new Error("Empty response from Groq");
  }

  return messageContent;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<CareerAIResponse>> {
  try {
    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: "Groq API key is not configured",
        },
        { status: 500 }
      );
    }

    const body: CareerAIRequest = await request.json();

    // Validate request type
    if (
      !body.type ||
      (body.type !== "career-path" &&
        body.type !== "copilot" &&
        body.type !== "skill-match")
    ) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: "Invalid request type",
        },
        { status: 400 }
      );
    }

    if (isCareerPathRequest(body)) {
      if (!body.goal || !body.goal.trim()) {
        return NextResponse.json<ErrorResponse>(
          {
            success: false,
            error: "Career goal is required",
          },
          { status: 400 }
        );
      }

      try {
        const careerPlan = await generateCareerPath(body.goal);

        return NextResponse.json<CareerPathResponse>({
          success: true,
          data: careerPlan,
        });
      } catch (error) {
        if (error instanceof SyntaxError) {
          return NextResponse.json<ErrorResponse>(
            {
              success: false,
              error: "Failed to parse AI response. Please try again.",
            },
            { status: 500 }
          );
        }

        throw error;
      }
    }

    if (isSkillMatchRequest(body)) {
      if (!body.opportunity || !body.opportunity.title) {
        return NextResponse.json<ErrorResponse>(
          {
            success: false,
            error: "Opportunity details are required",
          },
          { status: 400 }
        );
      }

      if (!Array.isArray(body.skills) || body.skills.length === 0) {
        return NextResponse.json<ErrorResponse>(
          {
            success: false,
            error: "At least one skill must be provided",
          },
          { status: 400 }
        );
      }

      try {
        const matchResult = await generateSkillMatch(
          body.opportunity,
          body.skills
        );

        return NextResponse.json<SkillMatchResponse>({
          success: true,
          data: matchResult,
        });
      } catch (error) {
        if (error instanceof SyntaxError) {
          return NextResponse.json<ErrorResponse>(
            {
              success: false,
              error: "Failed to parse AI skill match response. Please try again.",
            },
            { status: 500 }
          );
        }

        throw error;
      }
    }

    // Copilot conversation
    if (!body.message || !body.message.trim()) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: "Message is required",
        },
        { status: 400 }
      );
    }

    const reply = await generateCopilotResponse(body.message, body.context);

    return NextResponse.json<CopilotResponse>({
      success: true,
      message: reply,
    });
  } catch (error) {
    console.error("Career AI error:", error);

    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();

      if (
        errorMessage.includes("401") ||
        errorMessage.includes("authentication") ||
        errorMessage.includes("invalid api key")
      ) {
        return NextResponse.json<ErrorResponse>(
          {
            success: false,
            error: "Authentication failed. Please check your Groq API key.",
          },
          { status: 401 }
        );
      }

      if (
        errorMessage.includes("rate_limit") ||
        errorMessage.includes("429") ||
        errorMessage.includes("rate limit")
      ) {
        return NextResponse.json<ErrorResponse>(
          {
            success: false,
            error: "AI usage is temporarily limited. Please try again shortly.",
          },
          { status: 429 }
        );
      }
    }

    return NextResponse.json<ErrorResponse>(
      {
        success: false,
        error:
          "An error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}