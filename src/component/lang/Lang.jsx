"use client";
import { useGlobalStates } from "@/globalState";
import React, { useEffect } from "react";
import styles from "./Lang.module.css";
import { useRouter } from "next/navigation";

export default function Lang() {
  const { lang, setLang } = useGlobalStates();
  const router = useRouter();

  useEffect(() => {
    if (lang) {
      router.push("/main");
    }
  }, []);

  const handleLanguageSelect = (selectedLang) => {
    setLang(selectedLang);
    const intendedPath = sessionStorage.getItem("intendedPath");
    sessionStorage.removeItem("intendedPath");
    router.push(
      intendedPath === undefined ||
        intendedPath === "" ||
        intendedPath === null ||
        intendedPath === "/"
        ? "/main"
        : intendedPath
    );
  };

  return (
    <div className={styles.lang}>
      <div
        style={{
          color: "#fff",
          fontSize: "18px",
          border: "1px solid #fff",
          borderRadius: "8px",
          width: "50%",
          textAlign: "center",
          padding: "6px 8px",
          fontWeight: "600",
          userSelect: "none",
        }}
        onClick={() => handleLanguageSelect("ar")}
      >
        العربية
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: "18px",
          border: "1px solid #fff",
          borderRadius: "8px",
          width: "50%",
          textAlign: "center",
          padding: "6px 8px",
          fontWeight: "600",
          userSelect: "none",
        }}
        onClick={() => handleLanguageSelect("en")}
      >
        English
      </div>
    </div>
  );
}
