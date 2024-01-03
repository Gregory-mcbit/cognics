import React from "react";
import styles from "./WhyUs.module.css";

export interface IWhyUs {
  image: any;
  title: string;
  description: string;
}

export default function WhyUs({ image, title, description }: IWhyUs) {
  return (
    <div className={styles.why_us}>
      <div className={styles.why_us__image}>
        <img src={image} />
      </div>
      <div className={styles.why_us__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
      <div className={styles.why_us__description}>
        <span className={styles.description__text}>{description}</span>
      </div>
    </div>
  );
}
