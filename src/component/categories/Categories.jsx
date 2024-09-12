"use client";
import React from "react";
import styles from "./Categories.module.css";
import Container from "../container/Container";
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
import Link from "next/link";
import { useGlobalStates } from "@/globalState";

function Categories() {
  const { setArPageName, setProductPage, lang } = useGlobalStates();
  return (
    <Container>
      <div className={styles.main}>
        <p
          className={styles.menu}
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          {lang === "ar" ? "المنيو" : "Menu"}:
        </p>
        <div className={styles.grid}>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("mojito");
              setArPageName(lang === "ar" ? "موهيتو" : "Mojito");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={mojito}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "موهيتو" : "Mojito"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("drinks");
              setArPageName(lang === "ar" ? "العصائر الطبيعية" : "Drinks");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={drink}
                  alt="coffee"
                  width={45}
                  height={45}
                  priority
                />
              </span>
              <p>{lang === "ar" ? "العصائر الطبيعية" : "Drinks"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("coffee milk");
              setArPageName(lang === "ar" ? "كوفي ميلك" : "Coffee Milk");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={coffee_milk}
                  alt="cro"
                  width={40}
                  height={40}
                />
              </span>
              <p>{lang === "ar" ? "كوفي ميلك" : "Coffee Milk"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("milkshake");
              setArPageName(lang === "ar" ? "ميلكي" : "Milky");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={milkshake}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p style={{ marginTop: "10px" }}>
                {lang === "ar" ? "ميلكي" : "Milky"}
              </p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("smoothies");
              setArPageName(lang === "ar" ? "سموذي" : "Smoothie");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={smoothie}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "سموذي" : "Smoothie"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("hotdrinks");
              setArPageName(lang === "ar" ? "هوت درنك" : "Hot Drinks");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={FiCoffee}
                  alt="coffee"
                  width={50}
                  height={50}
                  style={{ marginBottom: "-6px" }}
                />
              </span>
              <p>{lang === "ar" ? "هوت درنك" : "Hot Drinks"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("icecoffee");
              setArPageName(lang === "ar" ? "ايس كوفي" : "Ice Coffee");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={iceCoffee}
                  alt="coffee"
                  width={45}
                  height={45}
                  style={{ marginBottom: "-2px" }}
                />
              </span>
              <p>{lang === "ar" ? "ايس كوفي" : "Ice Coffee"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("mix power");
              setArPageName(lang === "ar" ? "مكس طاقة" : "Mix Power");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={power}
                  alt="cro"
                  width={40}
                  height={40}
                />
              </span>
              <p>{lang === "ar" ? "مكس طاقة" : "Mix Power"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("coffee black");
              setArPageName(lang === "ar" ? "كوفي بلاك" : "Coffee Black");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={coffee_black}
                  alt="cro"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "كوفي بلاك" : "Coffee Black"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("tea");
              setArPageName(lang === "ar" ? "شاي" : "Tea");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={tea}
                  alt="cro"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "شاي" : "Tea"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("ice tea");
              setArPageName(lang === "ar" ? "ايس تي" : "Ice Tea");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={ice_tea}
                  alt="cro"
                  width={60}
                  height={60}
                  style={{ marginBottom: "-32px" }}
                />
              </span>
              <p>{lang === "ar" ? "ايس تي" : "Ice Tea"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("pastries");
              setArPageName(lang === "ar" ? "البيكري" : "Bakery");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={crosvg}
                  alt="cro"
                  width={46}
                  height={46}
                  style={{ marginBottom: "-10px" }}
                />
              </span>
              <p>{lang === "ar" ? "البيكري" : "Bakery"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("sweet");
              setArPageName(lang === "ar" ? "سويت" : "Sweet");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={sweet}
                  alt="cro"
                  width={50}
                  height={50}
                  style={{ marginBottom: "-10px" }}
                />
              </span>
              <p>{lang === "ar" ? "سويت" : "Sweet"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("pancake");
              setArPageName(lang === "ar" ? "بان كيك" : "Pancake");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={pancake}
                  alt="cro"
                  width={50}
                  height={50}
                  style={{ marginBottom: "-4px" }}
                />
              </span>
              <p>{lang === "ar" ? "بان كيك" : "Pancake"}</p>
            </div>
          </Link>
        </div>
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          href={`/main/products`}
          onClick={() => {
            setProductPage("hookah");
            setArPageName(lang === "ar" ? "الاراكيل" : "Hookah");
          }}
        >
          <div
            className={styles.item}
            style={{ marginBottom: "28px", gridAutoColumns: "2fr" }}
          >
            <span>
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src={hookah}
                alt="cro"
                width={55}
                height={55}
              />
            </span>
            <p>{lang === "ar" ? "الاراكيل" : "Hookah"}</p>
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default Categories;
