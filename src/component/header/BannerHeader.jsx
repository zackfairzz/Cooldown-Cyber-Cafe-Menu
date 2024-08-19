"use client";
import React from "react";
import styles from "./Header.module.css";
import { useGlobalStates } from "@/globalState";

export default function BannerHeader() {
  const { lang } = useGlobalStates();
  return (
    <p
      className={styles.offer}
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      {lang === "ar" ? "العروض" : "Offers"}:
    </p>
  );
}
