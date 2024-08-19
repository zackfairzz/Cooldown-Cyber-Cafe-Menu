"use client";
import React from "react";
import styles from "./Categories.module.css";
import Container from "../container/Container";
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
              setProductPage("hotdrinks");
              setArPageName(lang === "ar" ? "المشروبات الساخنة" : "Hot Drinks");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={FiCoffee}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "المشروبات الساخنة" : "Hot Drinks"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("mojito");
              setArPageName(lang === "ar" ? "كلاسك موهيتو" : "Mojito");
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
              <p>{lang === "ar" ? "كلاسك موهيتو" : "Mojito"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("cooldownMojito");
              setArPageName(
                lang === "ar" ? "كولداون موهيتو" : "Cooldown Mojito"
              );
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={cooldownMojito}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "كولداون موهيتو" : "Cooldown Mojito"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("smoothies");
              setArPageName(lang === "ar" ? "السموذيات" : "Smoothies");
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
              <p>{lang === "ar" ? "السموذيات" : "Smoothies"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("icedrinks");
              setArPageName(
                lang === "ar" ? "المشروبات الباردة" : "Cold Drinks"
              );
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={icedrink}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "المشروبات الباردة" : "Cold Drinks"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("milkshake");
              setArPageName(lang === "ar" ? "ميلك شيك" : "Milk Shake");
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
              <p>{lang === "ar" ? "ميلك شيك" : "Milk Shake"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("yogurtShake");
              setArPageName(lang === "ar" ? "يوكرت شيك" : "Yogurt Shake");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={yogurt}
                  alt="coffee"
                  width={40}
                  height={40}
                />
              </span>
              <p>{lang === "ar" ? "يوكرت شيك" : "Yogurt Shake"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("icecoffee");
              setArPageName(lang === "ar" ? "القهوة المثلجة" : "Ice Coffee");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={iceCoffee}
                  alt="coffee"
                  width={40}
                  height={40}
                />
              </span>
              <p>{lang === "ar" ? "القهوة المثلجة" : "Ice Coffee"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("fraptchino");
              setArPageName(lang === "ar" ? "فرابتشينو" : "Fraptchino");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={fraptchino}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "فرابتشينو" : "Fraptchino"}</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("pastries");
              setArPageName(lang === "ar" ? "المعجنات" : "Pastries");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={crosvg}
                  alt="cro"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "المعجنات" : "Pastries"}</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("hookah");
              setArPageName(lang === "ar" ? "الاراكيل" : "Hookah");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={hookah}
                  alt="cro"
                  width={45}
                  height={45}
                />
              </span>
              <p>{lang === "ar" ? "الاراكيل" : "Hookah"}</p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
