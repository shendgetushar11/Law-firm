import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>Let's Introduce Ourself</div>
      <div className={styles.line}></div>
      <div className={styles.criminal}>
        <h3>Criminal Lawyer</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default About;
