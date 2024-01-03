import React from "react";
import styles from "./Item.module.css";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M28 13.99C22.5078 14.489 19.3524 14.948 17.4151 16.4647C15.1384 18.2409 14.5991 21.4939 14 28C13.3809 21.2545 12.8217 18.0214 10.3252 16.2851C8.38802 14.928 5.2525 14.489 0 14.01C5.47218 13.511 8.64765 13.052 10.5649 11.5552C12.8616 9.75909 13.4009 6.52602 14 0C14.5592 6.00713 15.0585 9.22024 16.9158 11.0763C18.7732 12.9323 22.0086 13.4512 28 13.99Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Item({ title }: { title: string }) {
  return (
    <div className={styles.item}>
      <div className={styles.item__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>{title}</span>
        </div>
        <div className={styles.inner__image}>{star()}</div>
      </div>
    </div>
  );
}
