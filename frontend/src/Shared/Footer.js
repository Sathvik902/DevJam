import React from "react";
import styles from "./Footer.module.css"; // import the module CSS file for styling

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <h3>ADDRESS</h3>
        <p>Bangalore</p>
      </div>
      <p className={styles.copyRight}>
        Copyright 2022 © Name of company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
