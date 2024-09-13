"use client";
import React, { useState } from "react";
import styles from "./RatingForm.module.css";
import Image from "next/image";
import Container from "../container/Container";
import { Rate, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useGlobalStates } from "@/globalState";

const RatingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [overallRating, setOverallRating] = useState(3);
  const [serviceRating, setServiceRating] = useState(3);
  const [qualityRating, setQualityRating] = useState(3);
  const [priceRating, setPriceRating] = useState(3);
  const [musicRating, setMusicRating] = useState(3);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { lang } = useGlobalStates();
  const sendEmail = async () => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_EMAIL_API_URL,
        {
          name,
          email,
          overallRating,
          serviceRating,
          qualityRating,
          priceRating,
          musicRating,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setOverallRating(0);
      setServiceRating(0);
      setQualityRating(0);
      setPriceRating(0);
      setMusicRating(0);
      setMessage("");
    }
  };

  function stateCheck() {
    return (
      name &&
      email &&
      overallRating > 0 &&
      serviceRating > 0 &&
      qualityRating > 0 &&
      priceRating > 0 &&
      musicRating > 0
    );
  }

  return (
    <>
      {loading ? (
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
              {lang === "ar"
                ? "اخبرنا عن تجربتك"
                : "Tell us about your experience"}
            </p>
          </div>
          <div className="loading">
            <Spin
              indicator={<LoadingOutlined spin />}
              size="large"
              style={{ color: "#a247dc" }}
            />
          </div>
        </Container>
      ) : (
        <div className={`${styles.main}`}>
          <Container>
            <div
              className={styles.logo}
              style={
                lang !== "ar"
                  ? {
                      direction: "ltr",
                      marginRight: "0px",
                      marginLeft: "-28px",
                    }
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
                {lang === "ar"
                  ? "اخبرنا عن تجربتك"
                  : "Tell us about your experience"}
              </p>
            </div>
            {error ? (
              <div className={styles.error}>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={er}
                  alt="error"
                  width={100}
                  height={100}
                />
                <p>!.. لقد حدث خطأ ما </p>
              </div>
            ) : (
              <form
                onSubmit={sendEmail}
                className={lang === "ar" ? styles.form : styles.eForm}
              >
                <input
                  type="text"
                  placeholder={lang === "ar" ? "الاسم" : "Name"}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder={lang === "ar" ? "البريد الالكتروني" : "Email"}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>{lang === "ar" ? "التقييم" : "Rating"}</p>
                <Rate
                  value={overallRating}
                  required
                  className={styles.rate}
                  onChange={setOverallRating}
                />
                <p>{lang === "ar" ? "الخدمة" : "Service"}</p>
                <Rate
                  value={serviceRating}
                  required
                  className={styles.rate}
                  onChange={setServiceRating}
                />
                <p>{lang === "ar" ? "الجودة" : "Quality"}</p>
                <Rate
                  value={qualityRating}
                  required
                  className={styles.rate}
                  onChange={setQualityRating}
                />
                <p>{lang === "ar" ? "السعر" : "Prices"}</p>
                <Rate
                  value={priceRating}
                  required
                  className={styles.rate}
                  onChange={setPriceRating}
                />
                <p>{lang === "ar" ? "الموسيقى" : "Music"}</p>
                <Rate
                  value={musicRating}
                  required
                  className={styles.rate}
                  onChange={setMusicRating}
                />
                <textarea
                  placeholder={
                    lang === "ar"
                      ? "الملاحظات الاخرى (اختياري)"
                      : "Other comments (optional)"
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  style={{ marginBottom: "20px", marginBottom: "28px" }}
                >
                  {lang === "ar" ? "ارسال" : "Submit"}
                </button>
              </form>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default RatingForm;
