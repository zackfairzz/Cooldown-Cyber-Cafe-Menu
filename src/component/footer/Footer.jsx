import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.css";

function Footer({ Style }) {
  return (
    <Container>
      <div style={Style} className={styles.footer}>
        <div className={styles.head2}>developed by</div>
        <div className={styles.head3}>
          <a href="https://api.whatsapp.com/send?phone=9647800245005">
            Dhulfiqar Ali
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
