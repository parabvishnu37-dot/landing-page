"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useCareerPlan } from "@/app/context/CareerContext";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
  isLoading?: boolean;
};

const defaultSuggestedPrompts = [
  "What should I learn next?",
  "How do I become a frontend developer?",
  "What skills do I need for a data analyst role?",
  "How can I improve my career path?",
];

const initialAssistantMessage: Message = {
  id: 1,
  role: "assistant",
  text: "Hi! I'm your SOLO Career Copilot.\n\nTell me what you're working toward and I'll help you figure out your next step.",
};

export default function AIChatbot() {
  const {
    careerPlan,
    skillMatch,
    copilotPreloadQuery,
    setCopilotPreloadQuery,
    isCopilotOpen,
    setIsCopilotOpen,
  } = useCareerPlan();

  const [messages, setMessages] = useState<Message[]>([initialAssistantMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextMessageId = useRef(2);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isCopilotOpen) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isCopilotOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isCopilotOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isCopilotOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isCopilotOpen) {
        setIsCopilotOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCopilotOpen, setIsCopilotOpen]);

  // Handle external queries (e.g. from SkillMatch CTA or Explore cards)
  useEffect(() => {
    if (copilotPreloadQuery) {
      setIsCopilotOpen(true);
      sendMessage(copilotPreloadQuery);
      setCopilotPreloadQuery(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copilotPreloadQuery]);

  async function sendMessage(rawMessage: string) {
    const text = rawMessage.trim();
    if (!text || isLoading) return;

    setError(null);
    const messageId = nextMessageId.current;
    nextMessageId.current += 1;

    // Add user message
    setMessages((current) => [...current, { id: messageId, role: "user", text }]);
    setInput("");
    setIsLoading(true);

    // Add loading indicator
    const loadingId = nextMessageId.current;
    nextMessageId.current += 1;
    setMessages((current) => [
      ...current,
      { id: loadingId, role: "assistant", text: "Thinking through your path...", isLoading: true },
    ]);

    try {
      const response = await fetch("/api/career-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "copilot",
          message: text,
          context: {
            careerPlan: careerPlan.goal ? careerPlan : undefined,
            skillMatch: skillMatch || undefined,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to get response");
      }

      // Replace loading placeholder with real AI message
      setMessages((current) =>
        current.map((msg) =>
          msg.id === loadingId
            ? { ...msg, text: data.message, isLoading: false }
            : msg
        )
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(errorMessage);

      setMessages((current) =>
        current.map((msg) =>
          msg.id === loadingId
            ? {
                ...msg,
                text: `Sorry, I couldn't process that right now. ${errorMessage}`,
                isLoading: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  // Active suggestions based on context
  const activeSuggestions = skillMatch
    ? [
        "What should I learn first?",
        "How can I improve my match?",
        "What project should I build?",
        "What courses match my skills?",
      ]
    : careerPlan.goal
    ? [
        `What should I learn first for ${careerPlan.goal}?`,
        "What project should I build?",
        "How can I prove these skills?",
        "What opportunities match this path?",
      ]
    : defaultSuggestedPrompts;

  return (
    <aside aria-label="SOLO AI Assistant">
      {/* Floating AI Assistant Button (Fixed Bottom-Right) */}
      <button
        type="button"
        onClick={() => setIsCopilotOpen((prev) => !prev)}
        aria-label="Open SOLO AI Career Copilot"
        aria-expanded={isCopilotOpen}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#FD4322] p-3.5 text-white shadow-[0_10px_28px_rgba(253,67,34,0.36)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e83b1c] hover:shadow-[0_14px_34px_rgba(253,67,34,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2 sm:px-5 sm:py-3.5"
      >
        {/* AI Sparkle Icon */}
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path d="m12 3 1.25 4.75L18 9l-4.75 1.25L12 15l-1.25-4.75L6 9l4.75-1.25L12 3Z" />
          <path d="m18.5 14 .58 2.42L21.5 17l-.58 2.42L15.5 17l2.42-.58L18.5 14Z" />
        </svg>
        <span className="hidden text-[13px] font-black tracking-wide sm:inline">
          SOLO AI
        </span>
        {/* Subtle online pulse */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
      </button>

      {/* Floating Chat Popup */}
      {isCopilotOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="copilot-title"
          className="fixed bottom-24 right-4 z-50 flex h-[580px] max-h-[85vh] w-[calc(100vw-32px)] sm:w-[410px] flex-col overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-white shadow-[0_24px_60px_rgba(20,36,61,0.2)] transition-all duration-200 ease-out animate-fadeIn sm:right-6"
        >
          {/* Popup Header */}
          <div className="flex items-center justify-between border-b border-[#e8eef5] bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1ec] text-[#FD4322] shadow-xs">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m12 3 1.25 4.75L18 9l-4.75 1.25L12 15l-1.25-4.75L6 9l4.75-1.25L12 3Z" />
                  <path d="m18.5 14 .58 2.42L21.5 17l-.58 2.42L15.5 17l2.42-.58L18.5 14Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-black text-[#14243D]" id="copilot-title">
                    ✨ SOLO AI
                  </span>
                  <span className="rounded-full bg-[#eaf8f1] px-1.5 py-0.2 text-[8px] font-extrabold text-[#128455]">
                    ● Online
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-[#64748B]">Career Copilot</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsCopilotOpen(false)}
              aria-label="Close Career Copilot"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#94a3b8] transition-colors hover:bg-[#F5F8FC] hover:text-[#14243D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF]"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

            {/* Context Badge (if user has active Career Plan or Skill Match) */}
            {(careerPlan.goal || skillMatch) && (
              <div className="flex items-center gap-2 border-b border-[#e8eef5] bg-[#F5F8FC] px-4 py-2 text-[10px] font-semibold text-[#64748B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1255FF]" />
                <span className="truncate">
                  {skillMatch
                    ? `Context: ${skillMatch.opportunityTitle} (${skillMatch.matchPercentage}% match)`
                    : `Context: ${careerPlan.goal}`}
                </span>
              </div>
            )}

            {/* Message History Area */}
            <div className="min-h-0 flex-1 space-y-3.5 overflow-y-auto bg-[#F5F8FC] p-4">
              {messages.map((msg) => {
                const isUser = msg.role === "user";

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && (
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fff1ec] text-[10px] text-[#FD4322]">
                        ✨
                      </span>
                    )}

                    <div
                      className={`max-w-[84%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-xs ${
                        isUser
                          ? "rounded-br-sm bg-[#eef5ff] text-[#14243D] border border-[#cfe0fb]"
                          : "rounded-bl-sm border border-[#e3eaf1] bg-white text-[#14243D]"
                      }`}
                    >
                      {msg.isLoading ? (
                        <span className="inline-flex items-center gap-2 text-[#64748B]">
                          <svg className="h-3.5 w-3.5 animate-spin text-[#FD4322]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          {msg.text}
                        </span>
                      ) : (
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div ref={messageEndRef} />
            </div>

            {/* Error Banner */}
            {error && (
              <div className="flex items-center justify-between border-t border-red-200 bg-red-50 px-4 py-2 text-[11px] text-red-700">
                <span className="truncate">{error}</span>
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="ml-2 font-bold underline"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Suggested Prompts Pill Row */}
            <div className="border-t border-[#e8eef5] bg-white px-4 py-2.5">
              <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
                Suggested Questions
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {activeSuggestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    disabled={isLoading}
                    onClick={() => sendMessage(prompt)}
                    className="shrink-0 rounded-full border border-[#dbe6f1] bg-[#F5F8FC] px-2.5 py-1 text-[10px] font-semibold text-[#14243D] transition-colors hover:border-[#FD4322] hover:bg-[#fff1ec] hover:text-[#FD4322] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-[#e8eef5] bg-white p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, paths, projects..."
                disabled={isLoading}
                aria-label="Ask Career Copilot a question"
                className="h-10 min-w-0 flex-1 rounded-xl border border-[#dbe6f1] bg-[#F5F8FC] px-3.5 text-[12px] font-medium text-[#14243D] outline-none placeholder:text-[#94a3b8] focus:border-[#FD4322] focus:bg-white focus:ring-1 focus:ring-[#FD4322] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send query"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FD4322] text-white shadow-xs transition-all hover:bg-[#e83b1c] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 14-7-3.5 14-3.5-6.5L5 12Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h3.5" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </aside>
  );
}