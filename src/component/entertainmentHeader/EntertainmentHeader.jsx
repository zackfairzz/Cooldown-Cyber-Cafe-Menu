"use client";
import React, { useEffect } from "react";
import styles from "./EntertainmentHeader.module.css";
import Image from "next/image";
import Container from "../container/Container";
import { useGlobalStates } from "@/globalState";

export default function EntertainmentHeader() {
  const { arPageName, setArPageName, setEntertainmentPage, lang } =
    useGlobalStates();
  useEffect(() => {
    if (arPageName === "" || arPageName === undefined || arPageName === null) {
      setArPageName(lang === "ar" ? "سينما" : "Cinema");
      setEntertainmentPage("Cinema");
    }
  }, [arPageName]);
  return (
    <Container>
      <div
        className={styles.logo}
        style={
          lang !== "ar"
            ? { direction: "ltr", marginRight: "0px", marginLeft: "-28px" }
            : {}
        }
      >
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
          {arPageName}
        </p>
      </div>
    </Container>
  );
}
