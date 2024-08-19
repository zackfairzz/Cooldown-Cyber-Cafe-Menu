"use client";
import React from "react";
import styles from "./Navbar.module.css";
import FiCoffee from "../../../public/hot_drinks.svg";
import crosvg from "../../../public/cro.svg";
import hookah from "../../../public/hookah.svg";
import fraptchino from "../../../public/fraptchino.svg";
import iceCoffee from "../../../public/ice_coffee.svg";
import milkshake from "../../../public/milkshake.svg";
import smoothie from "../../../public/smoothie.svg";
import drink from "../../../public/drink.svg";
import mojito from "../../../public/mojito.svg";
import cooldownMojito from "../../../public/cooldownMojito.svg";
import yogurt from "../../../public/yogurt.svg";
import icedrink from "../../../public/ice-drink.svg";
import Image from "next/image";
import Link from "next/link";
import { useGlobalStates } from "@/globalState";

function Navbar() {
  const { arPageName, setArPageName, setProductPage, lang } = useGlobalStates();
  return (
    <div
      className={styles.nav}
      style={{
        flexDirection: lang !== "ar" && "row",
      }}
    >
      <div
        className={
          arPageName === "العصائر الطبيعية" || arPageName === "Drinks"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("drinks");
          setArPageName(lang === "ar" ? "العصائر الطبيعية" : "Drinks");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={drink}
            alt="coffee"
            style={{ marginLeft: lang === "ar" && "-10px" }}
            width={23}
            height={23}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "العصائر الطبيعية" : "Drinks"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "المشروبات الساخنة" || arPageName === "Hot Drinks"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("hotdrinks");
          setArPageName(lang === "ar" ? "المشروبات الساخنة" : "Hot Drinks");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={FiCoffee}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "المشروبات الساخنة" : "Hot Drinks"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "كلاسك موهيتو" || arPageName === "Mojito"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("mojito");
          setArPageName(lang === "ar" ? "كلاسك موهيتو" : "Mojito");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={mojito}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "كلاسك موهيتو" : "Mojito"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "كولداون موهيتو" || arPageName === "Cooldown Mojito"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("cooldownMojito");
          setArPageName(lang === "ar" ? "كولداون موهيتو" : "Cooldown Mojito");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={cooldownMojito}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "كولداون موهيتو" : "Cooldown Mojito"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "السموذيات" || arPageName === "Smoothies"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("smoothies");
          setArPageName(lang === "ar" ? "السموذيات" : "Smoothies");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={smoothie}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "السموذيات" : "Smoothies"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "المشروبات الباردة" || arPageName === "Cold Drinks"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("icedrinks");
          setArPageName(lang === "ar" ? "المشروبات الباردة" : "Cold Drinks");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={icedrink}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "المشروبات الباردة" : "Cold Drinks"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "ميلك شيك" || arPageName === "Milk Shake"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("milkshake");
          setArPageName(lang === "ar" ? "ميلك شيك" : "Milk Shake");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={milkshake}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "ميلك شيك" : "Milk Shake"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "يوكرت شيك" || arPageName === "Yogurt Shake"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("yogurtShake");
          setArPageName(lang === "ar" ? "يوكرت شيك" : "Yogurt Shake");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={yogurt}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "يوكرت شيك" : "Yogurt Shake"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "القهوة المثلجة" || arPageName === "Ice Coffee"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("icecoffee");
          setArPageName(lang === "ar" ? "القهوة المثلجة" : "Ice Coffee");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={iceCoffee}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "القهوة المثلجة" : "Ice Coffee"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "فرابتشينو" || arPageName === "Fraptchino"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("fraptchino");
          setArPageName(lang === "ar" ? "فرابتشينو" : "Fraptchino");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={fraptchino}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "فرابتشينو" : "Fraptchino"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "المعجنات" || arPageName === "Pastries"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("pastries");
          setArPageName(lang === "ar" ? "المعجنات" : "Pastries");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={crosvg}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "المعجنات" : "Pastries"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "الاراكيل" || arPageName === "Hookah"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("hookah");
          setArPageName(lang === "ar" ? "الاراكيل" : "Hookah");
        }}
      >
        <div
          className={styles.item}
          style={{
            flexDirection: lang !== "ar" && "row",
          }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={hookah}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "الاراكيل" : "Hookah"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
