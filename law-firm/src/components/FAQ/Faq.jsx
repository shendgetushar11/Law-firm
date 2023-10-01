import React from "react";
import styles from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ReactComponent as Plus } from "../../assets/Plus.svg";

const Faq = () => {
  const data = [
    {
      title: "Do I need a personal injury report?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "How much is my case worth?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "What should I do right after car accidect",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "How much is my case worth?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.text}>FAQ</div>
      <div className={styles.innerContainer}>
        <div className={styles.innerText}>
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </div>
        <div className={styles.accordion}>
          {data.map((data) => (
            <Accordion className={styles.accordionMain}>
              <AccordionSummary expandIcon={<Plus />}>
                <Typography className={styles.title}>{data.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.content}>
                  {data.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
