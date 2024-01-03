import React from "react";
import styles from "./Info.module.css";
import Stat from "./stat/Stat";
import image from "@/app/static/png/index/profilesmtha.png";

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.info__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>Информация о сессии</span>
        </div>
        <div className={styles.inner__stats}>
          <Stat title="3000₽" description="Стоимость за одну сессию" />
          <Stat title="1 час" description="Длительность сессии" />
        </div>
      </div>
      <div className={styles.info__image}>
        <img src={image.src} className={styles.image__img} />
      </div>
    </div>
  );
}
