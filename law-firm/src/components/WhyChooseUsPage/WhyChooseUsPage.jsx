import React from "react";
import Card from "../Card/Card";
import styles from "./WhyChooseUsPage.module.css";
import giftImg from "../../assets/gift.jpg";

const WhyChooseUsPage = () => {
  let img = giftImg;

  const data = [
    {
      imageUrl: img,
      title: "98% Success Rate",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      btnName: "Read More",
    },
    {
      imageUrl: img,
      title: "100% Success Rate",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      btnName: "Read More",
    },
    {
      imageUrl: img,
      title: "100% Success Rate",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      btnName: "Read More",
    },
  ];

  return (
    <div className={styles.chooseContainer}>
      <div className={styles.chooseText}>Why Choose Us?</div>
      <div className={styles.chooseCard}>
        {data.map((data) => (
          <Card
            title={data.title}
            content={data.content}
            imageUrl={data.imageUrl}
            btnName={data.btnName}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
