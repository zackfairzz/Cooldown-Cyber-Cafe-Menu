import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Lang from "@/component/lang/Lang";
import "./globals.css";

export const metadata = {
  title: "الرئيسية",
  description: "",
};

export default function Home() {
  return (
    <div
      className={`${styles.main} bg-color`}
      style={{
        backgroundImage: `url('/background3.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.content}>
        <Container>
          <div className={styles.logoBox}>
            <div className={styles.logo}>
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src="/logo2.png"
                alt="logo"
                fill
              />
            </div>
            <p>
              <span>COOLDOWN</span>
              <br />
              مرحباً بك
            </p>
          </div>
          <div className={styles.caption}>
            <Image src="/lang.svg" alt="lang" width={30} height={30} />
            <p>Language - اللغة</p>
          </div>
          <Lang />
        </Container>
      </div>
    </div>
  );
}
