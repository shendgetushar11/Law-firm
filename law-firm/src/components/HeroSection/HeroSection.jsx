import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as Heroimage } from "../../assets/Heroimage.svg";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <h2>You don't have to Fight Alone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae..
        </p>
        <div className={styles.emailContainer}>
          <input
            className={styles.emailInput}
            placeholder="Enter your Email address"
            type="text"
          />
          <button className={styles.emailButton}>Let's Talk</button>
        </div>
      </div>
      <div>
        <Heroimage />
      </div>
    </div>
  );
};

export default HeroSection;
