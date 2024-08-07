"use client";
import React, { useEffect } from "react";
import styles from "./ProductsHeader.module.css";
import Container from "../container/Container";
import { useGlobalStates } from "@/globalState";
import arrow from "../../../public/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function ProductsHeader() {
  const { arPageName } = useGlobalStates();
  useEffect(() => {
    arPageName === "" || arPageName === undefined || arPageName === null
      ? redirect("/main")
      : null;
  }, [arPageName]);
  return (
    <Container>
      <div className={styles.headline}>
        <Link href="/main">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={arrow}
            alt="right"
            width={30}
            height={30}
          />
        </Link>
        <p>{arPageName}</p>
      </div>
    </Container>
  );
}

export default ProductsHeader;
