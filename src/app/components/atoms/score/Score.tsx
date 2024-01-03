import React from "react";
import styles from "./Score.module.css";

export interface IScore {
  rating: number;
  outOf: number;
}

export default function Score({ rating, outOf }: IScore) {
  return (
    <div className={styles.score}>
      <div className={styles.score__inner}>
        <div className={styles.inner__rating}>
          <span className={styles.rating__text}>{rating}</span>
        </div>
        <div className={styles.inner__out_of}>
          <span className={styles.out_of__text}>/ {outOf}</span>
        </div>
      </div>
    </div>
  );
}
