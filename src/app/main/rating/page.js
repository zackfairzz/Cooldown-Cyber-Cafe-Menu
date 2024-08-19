import RatingForm from "@/component/ratingForm/RatingForm";
import React from "react";
import styles from "./page.module.css";
import PageNameRedetection from "@/component/PageNameRedetection";

export const metadata = {
  title: "التقيم",
  description: "",
};

function ContactUs() {
  return (
    <div className={styles.main}>
      <PageNameRedetection />
      <RatingForm />
    </div>
  );
}
export default ContactUs;
