import React from "react";
import styles from "./Advantage.module.css";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M30 14.9893C24.1155 15.5239 20.7347 16.0157 18.6591 17.6408C16.2197 19.5438 15.6419 23.0292 15 30C14.3367 22.7726 13.7375 19.3086 11.0628 17.4483C8.98716 15.9943 5.62767 15.5239 0 15.0107C5.86305 14.4761 9.26534 13.9843 11.3195 12.3806C13.7803 10.4562 14.3581 6.99216 15 0C15.5991 6.43621 16.1341 9.87883 18.1241 11.8674C20.1141 13.856 23.5806 14.412 30 14.9893Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Advantage({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: string;
}) {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantage__inner}>
        <div className={styles.inner__upper}>
          <div className={styles.upper__image}>{star()}</div>
          <div className={styles.upper__title}>
            <span className={styles.title__text}>{title}</span>
          </div>
        </div>
        <div className={styles.inner__lower}>
          <div className={styles.lower__number}>
            <span className={styles.number__text}>{index}</span>
          </div>
          <div className={styles.lower__title}>
            <span className={styles.title__text}>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
