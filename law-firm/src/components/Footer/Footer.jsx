import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        {" "}
        <Navbar islogo={false} />
      </div>

      <div className={styles.innerContainer}>
        <p>© 2020 Acme. All right reserved.</p>
        <p> Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
