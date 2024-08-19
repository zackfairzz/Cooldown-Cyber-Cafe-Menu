"use client";
import { useGlobalStates } from "@/globalState";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function LangChecker({ children }) {
  const { lang } = useGlobalStates();
  useEffect(() => {
    if (!lang) {
      redirect("/");
    }
  });
  return <main>{children}</main>;
}
