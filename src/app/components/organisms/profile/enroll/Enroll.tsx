import React from "react";
import styles from "./Enroll.module.css";
import image from "@/app/static/png/index/think.png";

export default function Enroll() {
  return (
    <div className={styles.enroll}>
      <div className={styles.enroll__inner}>
        <div className={styles.inner__controls}>
          <div className={styles.controls__button}>
            <span className={styles.button__text}>Записаться на сессию</span>
          </div>
          <div className={styles.controls__description}>
            <span className={styles.description__text}>
              Выберите время, когда вам удобно провести сессию
            </span>
          </div>
        </div>
      </div>
      <div className={styles.enroll__image}>
        <img src={image.src} />
      </div>
    </div>
  );
}
