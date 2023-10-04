"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  return <NextSessionProvider>{children}</NextSessionProvider>;
}