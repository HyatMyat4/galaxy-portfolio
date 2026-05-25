"use client";
import React from "react";
import { AppProvider } from "../context/AppContext";

function Provider({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export default Provider;
