import React from "react";
import { useState } from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import styles from "./TeamInfo.module.css";

const TeamInfo = () => {
  const data = [
    {
      imageUrl: p1,
      title: "Danial Def",
      Content: "301 Cases",
    },
    {
      imageUrl: p2,
      title: "Sanfole",
      Content: "850 Cases",
    },
    {
      imageUrl: p3,
      title: "Cesforila",
      Content: "470 Cases",
    },
    {
      imageUrl: p4,
      title: "Colleen",
      Content: "180 Cases",
    },
    {
      imageUrl: p5,
      title: "Holleen",
      Content: "312 Cases",
    },
    {
      imageUrl: p6,
      title: "Nik Jeo",
      Content: "250 Cases",
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.teamText}>Our Team</div>
      <div className={styles.teamCard}>
        {data.map((data, index) => (
          <div
            className={`${styles.card} ${
              index === selectedCardIndex ? styles.selectedCard : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div>
              <img src={data.imageUrl} alt="" />
            </div>
            <div className={styles.innerDiv}>
              <h2>{data.title}</h2>
              <p>{data.Content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
