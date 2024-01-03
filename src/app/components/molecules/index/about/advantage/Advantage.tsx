import React from "react";
import styles from "./Advantage.module.css";

export interface IAboutAdvantage {
  title: string;
  description: string;
  status: string;
}

export default function Advantage({
  title,
  description,
  status,
}: IAboutAdvantage) {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantage__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>{title}</span>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>{description}</span>
        </div>
        <div className={styles.inner__status}>
          <span className={styles.status__text}>{status}</span>
        </div>
      </div>
    </div>
  );
}
