"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { CareerPlan, SkillMatchResult } from "@/app/types/career";

const EMPTY_PLAN: CareerPlan = {
  goal: "",
  summary: "",
  skills: [],
  learning: [],
  projects: [],
  credentials: [],
  opportunities: [],
};

type CareerContextType = {
  careerPlan: CareerPlan;
  setCareerPlan: (plan: CareerPlan) => void;
  clearCareerPlan: () => void;
  skillMatch: SkillMatchResult | null;
  setSkillMatch: (result: SkillMatchResult | null) => void;
  copilotPreloadQuery: string | null;
  setCopilotPreloadQuery: (query: string | null) => void;
  isCopilotOpen: boolean;
  setIsCopilotOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  openCopilot: (query?: string) => void;
};

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export function CareerProvider({ children }: { children: ReactNode }) {
  const [careerPlan, setCareerPlan] = useState<CareerPlan>(EMPTY_PLAN);
  const [skillMatch, setSkillMatch] = useState<SkillMatchResult | null>(null);
  const [copilotPreloadQuery, setCopilotPreloadQuery] = useState<string | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  const clearCareerPlan = () => {
    setCareerPlan(EMPTY_PLAN);
  };

  const openCopilot = (query?: string) => {
    setIsCopilotOpen(true);
    if (query) {
      setCopilotPreloadQuery(query);
    }
  };

  return (
    <CareerContext.Provider
      value={{
        careerPlan,
        setCareerPlan,
        clearCareerPlan,
        skillMatch,
        setSkillMatch,
        copilotPreloadQuery,
        setCopilotPreloadQuery,
        isCopilotOpen,
        setIsCopilotOpen,
        openCopilot,
      }}
    >
      {children}
    </CareerContext.Provider>
  );
}

export function useCareerPlan() {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error("useCareerPlan must be used within CareerProvider");
  }
  return context;
}
