"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { useGlobalStates } from "@/globalState";
import Image from "next/image";
import pc from "../../../public/pc.svg";
import pc1 from "../../../public/pc1.svg";
import pc2 from "../../../public/pc2.svg";
import ps5 from "../../../public/ps5.svg";
import cinema from "../../../public/cinema.svg";
import Billiard from "../../../public/8.svg";
import vr from "../../../public/vr.svg";
import Container from "../container/Container";

export default function EntertainmentNavbar() {
  const {
    entertainmentPage,
    setEntertainmentPage,
    arPageName,
    setArPageName,
    lang,
  } = useGlobalStates();
  return (
    <Container>
      <div
        className={styles.nav}
        style={{ flexDirection: lang !== "ar" && "row" }}
      >
        <div
          className={entertainmentPage === "Cinema" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("Cinema");
            setArPageName(lang === "ar" ? "سينما" : "Cinema");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={cinema}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "12px" }}>
              {lang === "ar" ? "سينما" : "Cinema"}
            </p>
          </div>
        </div>
        <div
          className={entertainmentPage === "PS5" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("PS5");
            setArPageName(lang === "ar" ? "بلي ستيشن 5" : "Playstation 5");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={ps5}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "8px" }}>
              {lang === "ar" ? "بلي ستيشن 5" : "Playstation 5"}
            </p>
          </div>
        </div>
        <div
          className={entertainmentPage === "Billiard" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("Billiard");
            setArPageName(lang === "ar" ? "بليارد" : "Billiard");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={Billiard}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "12px" }}>
              {lang === "ar" ? "بليارد" : "Billiard"}
            </p>
          </div>
        </div>
        <div
          className={entertainmentPage === "PC" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("PC");
            setArPageName(lang === "ar" ? "كمبيوتر" : "PC");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={pc1}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "12px" }}>
              {lang === "ar" ? "كمبيوتر" : "PC"}
            </p>
          </div>
        </div>
        <div
          className={entertainmentPage === "PC VIP" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("PC VIP");
            setArPageName(lang === "ar" ? "VIP كمبيوتر" : "PC VIP");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={pc2}
              alt="coffee"
              width={23}
              height={18}
            />
            <p style={{ marginRight: "12px" }}>
              {lang === "ar" ? "VIP كمبيوتر" : "PC VIP"}
            </p>
          </div>
        </div>
        <div
          className={entertainmentPage === "PC Lux" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("PC Lux");
            setArPageName(lang === "ar" ? "Lux كمبيوتر" : "PC Lux");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={pc}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "12px" }}>
              {lang === "ar" ? "Lux كمبيوتر" : "PC Lux"}
            </p>
          </div>
        </div>

        <div
          className={entertainmentPage === "VR" ? styles.active : null}
          onClick={() => {
            setEntertainmentPage("VR");
            setArPageName(lang === "ar" ? "الواقع الافتراضي" : "VR");
          }}
        >
          <div
            className={styles.item}
            style={{ flexDirection: lang !== "ar" && "row" }}
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={vr}
              alt="coffee"
              width={23}
              height={23}
            />
            <p style={{ marginRight: "8px" }}>
              {lang === "ar" ? "VR الواقع الافتراضي" : "VR"}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
