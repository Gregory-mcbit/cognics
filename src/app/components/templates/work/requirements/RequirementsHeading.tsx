import React from "react";
import styles from "./RequirementsHeading.module.css";

export default function RequirementsHeading() {
  return (
    <div className={styles.requirements}>
      <div className={styles.requirements__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>наши требования</span>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>
            Всего
            <span className={styles.text__custom}> 05</span>
          </span>
        </div>
      </div>
    </div>
  );
}
