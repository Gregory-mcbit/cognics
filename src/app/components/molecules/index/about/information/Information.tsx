import React from "react";
import styles from "./Information.module.css";
import informationImage from "@/app/static/png/index/information.png";
import informationLinkImage from "@/app/static/png/index/informationLink.png";

export default function Information() {
  return (
    <div className={styles.information}>
      <span className={styles.information__text}>
        Мы собрали людей, прошедших серьезную подготовку и практику в области
        <span className={styles.text__custom}>
          {" "}
          когнитивно-поведенческой <img src={informationImage.src} />
        </span>{" "}
        терапии. Данная терапия <img src={informationLinkImage.src} />
        зарекомендовала себя как действительно рабочий{" "}
        <span className={styles.text__custom}>механизм</span> для решения{" "}
        <span className={styles.text__custom}>психологических проблем.</span>
      </span>
    </div>
  );
}
