import React from "react";
import styles from "./Advantages.module.css";
import Rating from "./rating/Rating";
import Work from "./work/Work";

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <Rating />
      <Work />
    </div>
  );
}
