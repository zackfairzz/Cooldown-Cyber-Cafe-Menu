"use client";
import { useGlobalStates } from "@/globalState";
import Link from "next/link";
import React from "react";
import styles from "./Lang.module.css";

export default function Lang() {
  const { setLang } = useGlobalStates();
  return (
    <div className={styles.lang}>
      <Link onClick={() => setLang("ar")} href="/main">
        العربية
      </Link>
      <Link onClick={() => setLang("en")} href="/main">
        English
      </Link>
    </div>
  );
}
