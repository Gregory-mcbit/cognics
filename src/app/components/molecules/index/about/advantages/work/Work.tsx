import React from "react";
import styles from "./Work.module.css";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";

const buttonStyles = {
  padding: "4px 6px 4px 10px",
};

const smallStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M16 7.9943C12.8616 8.2794 11.0585 8.5417 9.9515 9.40841C8.6505 10.4234 8.34237 12.2823 8 16C7.64622 12.1454 7.32668 10.2979 5.90014 9.30577C4.79315 8.53029 3.00143 8.2794 0 8.0057C3.12696 7.7206 4.94151 7.4583 6.03709 6.60299C7.3495 5.57662 7.65763 3.72915 8 0C8.31954 3.43264 8.60485 5.26871 9.66619 6.32929C10.7275 7.38988 12.5763 7.68639 16 7.9943Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Work() {
  return (
    <div className={styles.work}>
      <div className={styles.work__inner}>
        <div className={styles.inner__button}>
          <LinkButton
            image={smallStar()}
            innerStyle={buttonStyles}
            title="Свой подход"
          />
        </div>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>для психологов</span>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>
            Если вы являетесь психологом и хотите присоединиться к нашей
            команде, то оставьте заявку!
          </span>
        </div>
      </div>
    </div>
  );
}
