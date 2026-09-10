"use client";

import { ReactNode } from "react";
import { CareerProvider } from "@/app/context/CareerContext";

export function RootLayoutClient({ children }: { children: ReactNode }) {
  return <CareerProvider>{children}</CareerProvider>;
}
