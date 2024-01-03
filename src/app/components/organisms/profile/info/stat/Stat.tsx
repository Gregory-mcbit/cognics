import React from "react";
import styles from "./Stat.module.css";

export default function Stat({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.stat}>
      <div className={styles.stat__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
      <div className={styles.stat__description}>
        <span className={styles.description__text}>{description}</span>
      </div>
    </div>
  );
}
