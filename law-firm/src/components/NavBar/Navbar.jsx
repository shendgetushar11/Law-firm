import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Xlogo } from "../../assets/logo.svg";
import { ReactComponent as Socialmedia } from "../../assets/socialmedia.svg";

const Navbar = ({ islogo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Xlogo />
      </div>

      <div className={styles.info}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div>
        {islogo ? (
          <div className={styles.contact}>
            <button>Contact Now</button>
          </div>
        ) : (
          <div>
            <Socialmedia />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
