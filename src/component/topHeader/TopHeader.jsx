"use client";
import { useGlobalStates } from "@/globalState";
import Image from "next/image";
import React from "react";
import styles from "./TopHeader.module.css";

export default function TopHeader() {
  const { lang } = useGlobalStates();
  return (
    <div className={`${lang === "ar" ? styles.logo : styles.eLogo}`}>
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
      />
      <p>
        <span>COOLDOWN</span>
        <br />
        {lang === "ar" ? "مرحباً بك" : "Welcome"}
      </p>
    </div>
  );
}
