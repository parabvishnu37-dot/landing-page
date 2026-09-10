export type Skill = {
  name: string;
  priority: "high" | "medium" | "low";
  reason: string;
};

export type LearningItem = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
};

export type Credential = {
  title: string;
  description: string;
};

export type Opportunity = {
  title: string;
  type: string;
  description: string;
};

export type CareerPlan = {
  goal: string;
  summary: string;
  skills: Skill[];
  learning: LearningItem[];
  projects: Project[];
  credentials: Credential[];
  opportunities: Opportunity[];
};

export type CareerPathRequest = {
  type: "career-path";
  goal: string;
};

export type OpportunityDemo = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  suggestedSkills: string[];
  requirements: string[];
};

export type SkillMatchCategory = {
  name: string;
  reason: string;
};

export type SkillMatchResult = {
  matchPercentage: number;
  matchedSkills: SkillMatchCategory[];
  partialSkills: SkillMatchCategory[];
  missingSkills: SkillMatchCategory[];
  summary: string;
  nextSteps: string[];
  opportunityTitle?: string;
};

export type SkillMatchOpportunityInput = {
  title: string;
  description: string;
  requirements: string[];
};

export type SkillMatchRequest = {
  type: "skill-match";
  opportunity: SkillMatchOpportunityInput;
  skills: string[];
};

export type CopilotContext = {
  careerPlan?: CareerPlan;
  skillMatch?: SkillMatchResult | null;
} | CareerPlan;

export type CopilotRequest = {
  type: "copilot";
  message: string;
  context: CopilotContext;
};

export type CareerAIRequest = CareerPathRequest | CopilotRequest | SkillMatchRequest;

export type CareerPathResponse = {
  success: true;
  data: CareerPlan;
};

export type CopilotResponse = {
  success: true;
  message: string;
};

export type SkillMatchResponse = {
  success: true;
  data: SkillMatchResult;
};

export type ErrorResponse = {
  success: false;
  error: string;
};

export type CareerAIResponse =
  | CareerPathResponse
  | CopilotResponse
  | SkillMatchResponse
  | ErrorResponse;

