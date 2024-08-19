"use client";
import Image from "next/image";
import styles from "./Info.module.css";
import PageNameRedetection from "../PageNameRedetection";
import Container from "../container/Container";
import about1 from "../../../public/about1.jpg";
import about2 from "../../../public/about2.jpg";
import { useGlobalStates } from "@/globalState";

export default function Info() {
  const { lang } = useGlobalStates();
  return (
    <>
      <Container>
        <PageNameRedetection />
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
            {lang === "ar" ? "من نحن" : "About Us"}{" "}
          </p>
        </div>
        <div
          className={styles.textBox}
          style={{
            textAlign: lang === "ar" ? "right" : "left",
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          <h1>{lang === "ar" ? "من نحن" : "About Us"}</h1>
          <p>
            {lang === "ar"
              ? `مرحبًا بكم في Cooldown Cyber Cafe، وجهتكم المثالية للاستمتاع بأفضل
            التجارب الإلكترونية والترفيهية. نحن هنا لنقدم لكم مزيجًا فريدًا من
            أحدث ألعاب الفيديو، والأجواء الودية، والمشروبات اللذيذة.`
              : `Welcome to Cooldown Cyber Cafe,
               your ideal destination for enjoying the best electronic and entertainment experiences.
                We are here to offer you a unique blend of the latest video games,
                 friendly atmosphere, and delicious drinks.`}
          </p>
          <div className={styles.img1}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={about1}
              alt="about"
              fill
            />
          </div>
          <h2>{lang === "ar" ? "رؤيتنا" : "Our Vision"}</h2>
          <p>
            {lang === "ar"
              ? `نطمح لأن نكون المركز الأول لعشاق الألعاب في المنطقة، حيث يجتمع
            الأصدقاء والعائلات للاستمتاع بالألعاب المثيرة وتجربة تكنولوجية
            حديثة.`
              : `We aspire to be the number one hub for gaming enthusiasts in the region,
               where friends and families gather to enjoy exciting games 
               and a modern technological experience.`}
          </p>

          <h2>
            {lang === "ar"
              ? " ما الذي يجعلنا مميزين؟"
              : "What makes us unique?"}
          </h2>
          <h3>
            {lang === "ar"
              ? " 1. أحدث الألعاب والتكنولوجيا"
              : "1. Latest games and technology"}
          </h3>
          <p>
            {lang === "ar"
              ? `نحن نوفر أحدث الإصدارات من ألعاب الفيديو وأحدث الأجهزة، لنضمن لكم تجربة لعب ممتعة وسلسة.`
              : `We offer the latest games and technology to ensure you have an enjoyable gaming experience.`}
          </p>
          <div className={styles.img2}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={about2}
              alt="about"
              fill
            />
          </div>

          <h3>
            {lang === "ar"
              ? " 2. بيئة مريحة وممتعة"
              : "2. Friendly and fun environment"}
          </h3>
          <p>
            {lang === "ar"
              ? `تصميم مقهانا يعكس طابعًا عصريًا ووديًا، حيث يمكن للجميع الاسترخاء
            وقضاء وقت ممتع سواء كانوا يلعبون أو يتحدثون مع الأصدقاء.`
              : `Our café's design reflects a modern and friendly vibe,
               where everyone can relax and have a great time,
                whether they're playing games or chatting with friends.`}
          </p>

          <h3>
            {lang === "ar"
              ? "3. فريق عمل ودود ومحترف"
              : "3. A friendly and professional team."}
          </h3>
          <p>
            {lang === "ar"
              ? `فريقنا مكون من محترفين يحبون الألعاب بقدر ما تحبونها أنتم. نحن هنا
            لمساعدتكم في كل ما تحتاجونه وضمان حصولكم على تجربة مميزة.`
              : `Our team is made up of professionals who love games as much as you do.
               We're here to assist you with everything you need 
               and to ensure you have a unique experience.`}
          </p>

          <h3>
            {lang === "ar" ? "4. مناسب للجميع" : "4. Suitable for everyone"}
          </h3>
          <p>
            {lang === "ar"
              ? `سواء كنت لاعبًا محترفًا تبحث عن تحديات جديدة، أو مجرد هاوٍ يريد
            الاستمتاع ببعض الوقت مع الأصدقاء، فإن Cooldown Cyber Cafe هو المكان
            المثالي لك.`
              : `Whether you're a professional gamer looking for new challenges 
              or just a casual player wanting to enjoy some time with friends,
               Cooldown Cyber Cafe is the perfect place for you.`}
          </p>

          <h2>{lang === "ar" ? "تواصل معنا" : "Contact Us"}</h2>
          <p style={{ marginBottom: "20px" }}>
            {lang === "ar"
              ? "للحجز والاستفسار تواصل معنا عبر وسائط التواصل الاتية: "
              : "For reservations and inquiries, please contact us through the following communication channels:"}
          </p>
          <div
            className={styles.contactBox}
            style={
              lang === "ar"
                ? {}
                : { flexDirection: "row", justifyContent: "left" }
            }
          >
            <Image
              src="/call.svg"
              alt="call"
              width={15}
              height={15}
              style={{ transform: lang !== "ar" ? "rotate(90deg)" : "none" }}
            />
            <p>+964 783 711 5788</p>
          </div>
          <div
            className={styles.contactBox}
            style={
              lang === "ar"
                ? {}
                : { flexDirection: "row", justifyContent: "left" }
            }
          >
            <Image
              src="/location.svg"
              alt="call"
              width={20}
              height={20}
              style={{ marginRight: "-4px" }}
            />
            <a
              href="https://maps.app.goo.gl/yBvx1TNV6bttcynd6"
              style={{
                textDecoration: "none",
                color: "#fff",
                textDecorationLine: "underline",
                textDecorationThickness: "0.5px",
                textUnderlineOffset: "6px",
              }}
            >
              {lang === "ar"
                ? "بغداد, اليرموك, اربع شوارع"
                : "Baghdad, Al-Yarmouk, 4th Street"}
            </a>
          </div>
        </div>
      </Container>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/CooldownCC/"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/facebook.svg" alt="call" width={30} height={30} />
        </a>
        <a
          href="https://www.instagram.com/cooldowncc/"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/instagram.svg" alt="call" width={30} height={30} />
        </a>
        <a
          href="https://www.youtube.com/@cooldowncc"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/youtube.svg" alt="call" width={35} height={35} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9647837115788"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/whatsapp.svg" alt="call" width={28} height={28} />
        </a>
      </div>
    </>
  );
}
