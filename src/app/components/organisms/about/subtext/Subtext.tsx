import React from "react";
import styles from "./Subtext.module.css";
import handshake from "@/app/static/png/index/handshake.png";

const link = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="23"
      viewBox="0 0 38 23"
      fill="none"
    >
      <rect x="30" y="18" width="7" height="5" fill="#8D8BE5" />
      <path
        d="M0 11C0 4.92487 4.92487 0 11 0H38V11C38 17.0751 33.0751 22 27 22H0V11Z"
        fill="#303030"
      />
      <path
        d="M14.1886 16.3975L24.6124 6.40268M24.6124 6.40268L15.8063 6.40268M24.6124 6.40268L24.6124 15.2229"
        stroke="white"
        stroke-width="1.60368"
      />
    </svg>
  );
};

export default function Subtext() {
  return (
    <div className={styles.subtext}>
      <span className={styles.subtext__text}>
        Мы собрали людей, прошедших серьезную подготовку и практику в области{" "}
        <span className={styles.text__custom}>
          когнитивно-поведенческой <img src={handshake.src} />
        </span>{" "}
        терапии. Данная терапия {link()} зарекомендовала себя как действительно
        рабочий
        <span className={styles.text__custom}>механизм</span>
        <span className={styles.text__custom}>
          для решения психологических проблем.
        </span>
      </span>
    </div>
  );
}
