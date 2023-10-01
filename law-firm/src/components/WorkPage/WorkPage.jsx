import React from "react";
import styles from "./WorkPage.module.css";
import cardimg1 from "../../assets/card1.jpg";
import cardimg2 from "../../assets/card2.jpg";
import cardimg3 from "../../assets/card3.jpg";
import cardimg4 from "../../assets/card4.jpg";
import cardimg5 from "../../assets/card5.jpg";
import cardimg6 from "../../assets/card6.jpg";

const WorkPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Area of Practices</div>
      <div className={styles.card}>
        <div className={styles.subContainer}>
          <div className={styles.card1}>
            <img className={styles.cardImg} src={cardimg1} alt="" />
            <div className={styles.imageText}>BUSINESS LAW</div>
          </div>
          <div className={styles.card2}>
            <img className={styles.cardImg} src={cardimg2} alt="" />
            <div className={styles.imageText}>Partnership LAW</div>
          </div>
        </div>

        <div className={styles.subContainer}>
          <div className={styles.card2} style={{ marginRight: "30px" }}>
            <img className={styles.cardImg} src={cardimg3} alt="" />
            <div className={styles.imageText}>REAL ESTATE LAW</div>
          </div>
          <div className={styles.card1} style={{ marginRight: "0px" }}>
            <img className={styles.cardImg} src={cardimg4} alt="" />
            <div className={styles.imageText}>BUSINESS LAW</div>
          </div>
        </div>

        <div className={styles.subContainer}>
          <div className={styles.card1}>
            <img className={styles.cardImg} src={cardimg5} alt="" />
            <div className={styles.imageText}>LANDLORD DISPUTES</div>
          </div>
          <div className={styles.card2}>
            <img className={styles.cardImg} src={cardimg6} alt="" />
            <div className={styles.imageText}>ELDER ABUSE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
