import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ title, content, imageUrl, btnName }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  const cardClassName = `card ${isClicked ? "clicked" : ""}`;

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      {imageUrl && <img src={imageUrl} alt="Card" className={styles.cardImg} />}
      <div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardContent}>{content}</p>
      </div>
      <button className={styles.cardBtn}>{btnName}</button>
    </div>
  );
};

export default Card;
