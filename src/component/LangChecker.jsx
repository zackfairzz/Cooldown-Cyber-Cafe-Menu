"use client";
import { useGlobalStates } from "@/globalState";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import

const LangChecker = ({ children }) => {
  const { lang } = useGlobalStates();
  const router = useRouter(); // Now using from next/navigation

  useEffect(() => {
    if (!lang) {
      // Store the current path in session storage
      sessionStorage.setItem("intendedPath", window.location.pathname); // Use window for current URL
      // Redirect to the language selection page
      router.push("/");
    }
  }, [lang, router]);

  return <>{lang ? children : null}</>; // Render children only if the language is selected
};

export default LangChecker;
