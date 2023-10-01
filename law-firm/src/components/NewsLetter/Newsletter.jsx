import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Subscribe Our Newsletter</div>
      <div className={styles.innerContainer}>
        <input placeholder="Name:" />
        <input
          placeholder="Enter Your Email:"
          style={{ borderRadius: "0px" }}
        />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Newsletter;
