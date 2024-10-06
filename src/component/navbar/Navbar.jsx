"use client";
import React from "react";
import styles from "./Navbar.module.css";
import FiCoffee from "../../../public/hot_drinks.svg";
import crosvg from "../../../public/cro.svg";
import hookah from "../../../public/hookah.svg";
import iceCoffee from "../../../public/ice_coffee.svg";
import milkshake from "../../../public/milkshake.svg";
import smoothie from "../../../public/smoothie.svg";
import drink from "../../../public/drink.svg";
import mojito from "../../../public/mojito.svg";
import sweet from "../../../public/sweet.svg";
import tea from "../../../public/tea.svg";
import ice_tea from "../../../public/ice_tea.svg";
import pancake from "../../../public/pancake.svg";
import coffee_black from "../../../public/coffeeBlack.svg";
import coffee_milk from "../../../public/coffee_milk.svg";
import power from "../../../public/power.svg";
import Image from "next/image";
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
          arPageName === "موهيتو" || arPageName === "Mojito"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("mojito");
          setArPageName(lang === "ar" ? "موهيتو" : "Mojito");
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
            {lang === "ar" ? "موهيتو" : "Mojito"}
          </p>
        </div>
      </div>
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
          arPageName === "كوفي ميلك" || arPageName === "Coffee Milk"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("coffee milk");
          setArPageName(lang === "ar" ? "كوفي ميلك" : "Coffee Milk");
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
            src={coffee_milk}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "كوفي ميلك" : "Coffee Milk"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "ميلكي" || arPageName === "Milky"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("milkshake");
          setArPageName(lang === "ar" ? "ميلكي" : "Milky");
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
            {lang === "ar" ? "ميلكي" : "Milky"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "سموذي" || arPageName === "Smoothie"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("smoothies");
          setArPageName(lang === "ar" ? "سموذي" : "Smoothie");
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
            {lang === "ar" ? "سموذي" : "Smoothie"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "هوت درنك" || arPageName === "Hot Drink"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("hotdrinks");
          setArPageName(lang === "ar" ? "هوت درنك" : "Hot Drink");
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
            {lang === "ar" ? "هوت درنك" : "Hot Drink"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "ايس كوفي" || arPageName === "Ice Coffee"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("icecoffee");
          setArPageName(lang === "ar" ? "ايس كوفي" : "Ice Coffee");
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
            {lang === "ar" ? "ايس كوفي" : "Ice Coffee"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "مكس طاقة" || arPageName === "Mix Energy"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("mix power");
          setArPageName(lang === "ar" ? "مكس طاقة" : "Mix Energy");
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
            src={power}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "مكس طاقة" : "Mix Energy"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "كوفي بلاك" || arPageName === "Coffee Black"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("coffee black");
          setArPageName(lang === "ar" ? "كوفي بلاك" : "Coffee Black");
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
            src={coffee_black}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "كوفي بلاك" : "Coffee Black"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "شاي" || arPageName === "Tea" ? styles.active : null
        }
        onClick={() => {
          setProductPage("tea");
          setArPageName(lang === "ar" ? "شاي" : "Tea");
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
            src={tea}
            alt="coffee"
            width={19}
            height={19}
          />
          <p style={{ paddingLeft: "4px", paddingRight: "4px" }}>
            {lang === "ar" ? "شاي" : "Tea"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "ايس تي" || arPageName === "Ice Tea"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("ice tea");
          setArPageName(lang === "ar" ? "ايس تي" : "Ice Tea");
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
            src={ice_tea}
            alt="coffee"
            width={32}
            height={32}
            style={{ marginBottom: "-16px" }}
          />
          <p
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
              marginRight: "-2px",
            }}
          >
            {lang === "ar" ? "ايس تي" : "Ice Tea"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "بان كيك" || arPageName === "Pancake"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("pancake");
          setArPageName(lang === "ar" ? "بان كيك" : "Pancake");
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
            src={pancake}
            alt="coffee"
            width={24}
            height={24}
          />
          <p
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          >
            {lang === "ar" ? "بان كيك" : "Pancake"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "سويت" || arPageName === "Sweet" ? styles.active : null
        }
        onClick={() => {
          setProductPage("sweet");
          setArPageName(lang === "ar" ? "سويت" : "Sweet");
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
            src={sweet}
            alt="coffee"
            width={24}
            height={24}
          />
          <p
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          >
            {lang === "ar" ? "سويت" : "Sweet"}
          </p>
        </div>
      </div>
      <div
        className={
          arPageName === "البيكري" || arPageName === "Bakery"
            ? styles.active
            : null
        }
        onClick={() => {
          setProductPage("pastries");
          setArPageName(lang === "ar" ? "البيكري" : "Bakery");
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

          <p style={{ paddingLeft: "4px", paddingRight: "5px" }}>
            {lang === "ar" ? "البيكري" : "Bakery"}
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
