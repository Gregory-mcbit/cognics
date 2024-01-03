import React from "react";
import styles from "./Link.module.css";

export interface IFooterLink {
  title: string;
  description: string;
}

export default function Link({ title, description }: IFooterLink) {
  return (
    <div className={styles.link}>
      <div className={styles.link__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
      <div className={styles.link__description}>
        <span className={styles.description__text}>{description}</span>
      </div>
    </div>
  );
}
