# SOLO AI Integration - Technical Implementation Details

## System Overview

The SOLO landing page now includes real OpenAI integration for career planning and guidance. This document explains the technical architecture and implementation details.

---

## Component Architecture

### 1. CareerContext Provider (app/context/CareerContext.tsx)

**Purpose**: Centralized state management for career plan data

**Exports**:
```typescript
type CareerContextType = {
  careerPlan: CareerPlan;
  setCareerPlan: (plan: CareerPlan) => void;
  clearCareerPlan: () => void;
};

export function CareerProvider({ children }: { children: ReactNode }) { ... }
export function useCareerPlan() { ... }
```

**Key Features**:
- Uses React Context API (no external state library needed)
- Initialized with empty plan
- Hook-based API for component consumption
- Throws error if used outside provider

**Integration**: Wraps entire app via `RootLayoutClient` in `layout-client.tsx`

---

### 2. Career Path Explorer (app/components/CareerPathExplorer.tsx)

**Purpose**: User interface for generating AI career paths

**Features**:
- Form for career goal input
- POST request to `/api/career-ai` with type "career-path"
- Tabbed interface showing 5 career stages:
  - Skills (with priority indicators)
  - Learning (topics and courses)
  - Projects (hands-on work)
  - Credentials (certifications)
  - Opportunities (job types)
- Loading state with animated dots
- Error handling with user-friendly messages
- Stores result in CareerContext for sharing

**State Management**:
```typescript
const [goal, setGoal] = useState("");           // User input
const [isLoading, setIsLoading] = useState(false); // Loading state
const [error, setError] = useState<string | null>(null); // Error messages
const [activeStage, setActiveStage] = useState<PathStage>("skills"); // Tab state
const { careerPlan, setCareerPlan } = useCareerPlan(); // Shared state
```

**API Integration**:
```typescript
fetch("/api/career-ai", {
  method: "POST",
  body: JSON.stringify({ type: "career-path", goal })
})
```

---

### 3. AI Chatbot (app/components/AIChatbot.tsx)

**Purpose**: Conversational AI guidance based on career context

**Features**:
- Message-based UI (similar to existing design)
- Real-time API calls to `/api/career-ai` with type "copilot"
- Auto-includes generated career plan as context
- Loading animation during response generation
- Error handling with retry capability
- Disabled inputs while processing
- Suggested prompts for getting started
- Scrolls to latest message automatically

**State Management**:
```typescript
const [messages, setMessages] = useState<Message[]>([initialMessage]);
const [input, setInput] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const { careerPlan } = useCareerPlan(); // Reads context
```

**Key Change**: Removed hardcoded `demoResponses` object, replaced with real API calls

**API Integration**:
```typescript
fetch("/api/career-ai", {
  method: "POST",
  body: JSON.stringify({
    type: "copilot",
    message: userMessage,
    context: careerPlan
  })
})
```

---

### 4. API Route (app/api/career-ai/route.ts)

**Purpose**: Server-side interface to OpenAI API

**Endpoint**: `POST /api/career-ai`

**Request Handling**:

1. **Validation**:
   - Check API key exists
   - Validate request type ("career-path" or "copilot")
   - Check required fields (goal or message)

2. **Career Path Generation** (`type: "career-path"`):
   ```typescript
   async function generateCareerPath(goal: string): Promise<CareerPlan>
   ```
   - Calls OpenAI with structured prompt
   - Expects JSON response matching CareerPlan schema
   - Validates response structure
   - Returns typed CareerPlan object

3. **Copilot Response** (`type: "copilot"`):
   ```typescript
   async function generateCopilotResponse(
     message: string,
     context: CareerPlan
   ): Promise<string>
   ```
   - Includes career context in prompt
   - Calls OpenAI with conversational system prompt
   - Returns string response
   - Personalizes based on provided career plan

**Error Handling**:
- Missing/invalid API key → 500
- Invalid request type → 400
- Missing goal/message → 400
- JSON parse error → 500 with helpful message
- Authentication error → 401
- Rate limit error → 429
- Other errors → 500 with generic message

**Response Types**:
```typescript
type CareerPathResponse = { success: true; data: CareerPlan };
type CopilotResponse = { success: true; message: string };
type ErrorResponse = { success: false; error: string };
type CareerAIResponse = CareerPathResponse | CopilotResponse | ErrorResponse;
```

---

## Data Types (app/types/career.ts)

```typescript
type Skill = {
  name: string;
  priority: "high" | "medium" | "low";
  reason: string;
};

type LearningItem = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
};

type Credential = {
  title: string;
  description: string;
};

type Opportunity = {
  title: string;
  type: string; // e.g., "Job", "Internship", "Project", "Freelance"
  description: string;
};

type CareerPlan = {
  goal: string;
  summary: string;
  skills: Skill[];
  learning: LearningItem[];
  projects: Project[];
  credentials: Credential[];
  opportunities: Opportunity[];
};
```

---

## OpenAI Integration Details

### Model Configuration

```typescript
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

**Why gpt-4o-mini?**
- Good balance between cost and quality
- Sufficient for structured output (JSON)
- Adequate for conversational responses
- Configurable via `.env.local`

### API Call Structure

```typescript
const response = await openai.chat.completions.create({
  model: MODEL,
  max_tokens: 2000, // or 500 for copilot
  messages: [
    {
      role: "system",
      content: SYSTEM_PROMPT // Career path or copilot instructions
    },
    {
      role: "user",
      content: USER_PROMPT // Goal or question
    }
  ]
});

const content = response.choices[0].message.content;
```

### System Prompts

**Career Path Prompt** (`CAREER_PATH_SYSTEM`):
- Instructs AI to return only JSON
- Specifies exact JSON structure
- Guides AI on prioritization and content quality
- Prevents hallucination of fake company names

**Copilot Prompt** (`COPILOT_SYSTEM`):
- Establishes AI personality (supportive career guide)
- Emphasizes personalization using career context
- Discourages false claims about job guarantees
- Guides response length and focus

---

## Flow Diagrams

### Career Path Generation Flow

```
┌─────────────────────────────────┐
│ User enters career goal         │
│ Clicks "Generate Path"          │
└────────────┬────────────────────┘
             │
             ↓
┌─────────────────────────────────┐
│ Career Path Explorer Component  │
│ - Validates input               │
│ - Shows loading state           │
└────────────┬────────────────────┘
             │
             ↓
┌─────────────────────────────────┐
│ POST /api/career-ai             │
│ { type: "career-path", goal }   │
└────────────┬────────────────────┘
             │
             ↓
┌─────────────────────────────────┐
│ Server: generateCareerPath()    │
│ - Construct system prompt       │
│ - Call OpenAI API               │
│ - Parse JSON response           │
│ - Validate structure            │
└────────────┬────────────────────┘
             │
             ↓
┌─────────────────────────────────┐
│ Return CareerPlan JSON          │
└────────────┬────────────────────┘
             │
             ↓
┌─────────────────────────────────┐
│ Update CareerContext state      │
│ - Display in tabs               │
│ - Store for copilot use         │
└─────────────────────────────────┘
```

### Copilot Conversation Flow

```
┌──────────────────────────────┐
│ User types question          │
│ AI Copilot has career plan   │
│ from shared context          │
└────────────┬─────────────────┘
             │
             ↓
┌──────────────────────────────┐
│ Validate input               │
│ Show loading state           │
└────────────┬─────────────────┘
             │
             ↓
┌──────────────────────────────┐
│ POST /api/career-ai          │
│ {                            │
│   type: "copilot",           │
│   message: userQuestion,     │
│   context: careerPlan        │
│ }                            │
└────────────┬─────────────────┘
             │
             ↓
┌──────────────────────────────┐
│ Server: generateCopilotResp()│
│ - Build context string       │
│ - Construct system prompt    │
│ - Call OpenAI API            │
│ - Extract message content    │
└────────────┬─────────────────┘
             │
             ↓
┌──────────────────────────────┐
│ Return AI response string    │
└────────────┬─────────────────┘
             │
             ↓
┌──────────────────────────────┐
│ Add to messages              │
│ Display in chat              │
│ Auto-scroll to new message   │
└──────────────────────────────┘
```

---

## Security Implementation

### Environment Variables

```bash
# .env.local (NEVER commit)
OPENAI_API_KEY=sk-...your-key...
OPENAI_MODEL=gpt-4o-mini
```

**Gitignore**: `.env*` already in `.gitignore`

### API Key Protection

1. **Server-Only Initialization**:
   ```typescript
   // Only in app/api/career-ai/route.ts (server-side)
   const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
   });
   ```

2. **No Client Exposure**:
   - Never use `NEXT_PUBLIC_` prefix
   - Never pass API key in fetch requests from client
   - All requests go through server route

3. **Error Messages**:
   - Never log full error objects to client
   - Never expose stack traces
   - Always return generic error for security

### Input Validation

**Server-Side**:
- Trim and validate goal text
- Trim and validate message text
- Reject empty strings
- Validate request type enum

**Client-Side**:
- Check input before enabling submit
- Disable inputs during processing
- Show user-friendly errors

---

## TypeScript Safety

All files use TypeScript with strict typing:

```typescript
// Types are validated at build time
const body: CareerAIRequest = await request.json();

// Type guards enable safe type narrowing
if (isCareerPathRequest(body)) {
  // body.goal is guaranteed to exist
}

// Response types are strictly defined
return NextResponse.json<CareerPathResponse>({ ... });
```

**Build Check**:
```bash
npm run build  # Fails if TypeScript errors exist
```

---

## Performance Considerations

### API Calls
- **Career Path**: 2000 max_tokens (longer response)
- **Copilot**: 500 max_tokens (shorter, faster)
- Adjust based on needs

### Network
- Requests are asynchronous (non-blocking UI)
- Loading states prevent double-submission
- Error states enable retry without reload

### Memory
- Career plan stored in React context (not Redux needed)
- Chat messages accumulate during session
- Consider pagination for long conversations

---

## Future Enhancements

1. **Persistence**:
   - Save career plans to database
   - Load previous plans
   - Track plan modifications over time

2. **Real Data Integration**:
   - Connect to SOLO job/course database
   - Replace generic opportunity types with real listings
   - Show actual credentials available on platform

3. **Analytics**:
   - Track popular career paths
   - Monitor AI response quality
   - Measure engagement metrics

4. **Advanced Features**:
   - Multi-step career planning wizard
   - Comparison of different career paths
   - Export to PDF or resume
   - Social sharing of paths
   - Collaborative planning

5. **Optimization**:
   - Cache common career paths
   - Implement response streaming for faster display
   - Add rate limiting to prevent abuse
   - Monitor token usage for cost control

---

## Build & Deployment

### Development
```bash
npm run dev  # Starts on localhost:3000
```

### Production Build
```bash
npm run build  # Verifies all types, compiles
npm run start  # Runs built version
```

### Deployment Checklist
- [ ] API key configured in production environment
- [ ] `.env.local` not committed to repository
- [ ] Build completes without errors
- [ ] TypeScript check passes
- [ ] API route is accessible
- [ ] Error handling works for API failures
- [ ] Rate limiting configured if needed
- [ ] Monitor token usage/costs

---

## Debugging Tips

### Check API Route is Working
```bash
curl -X POST http://localhost:3001/api/career-ai \
  -H "Content-Type: application/json" \
  -d '{"type":"career-path","goal":"Data Scientist"}'
```

### View Console Logs
1. Server logs in terminal running `npm run dev`
2. Client logs in browser DevTools (F12)
3. Check for error messages in `/api/career-ai` requests

### Test Without Real API Key
- Temporary return mock data in `/api/career-ai`
- Test UI/UX without OpenAI costs
- Comment out OpenAI call for testing

### TypeScript Errors
```bash
npm run build  # Full type check
# or check errors in VS Code editor
```

---

**Last Updated**: September 7, 2026  
**Version**: 1.0 - Production Ready
