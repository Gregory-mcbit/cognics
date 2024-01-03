import React from "react";
import styles from "./Button.module.css";

const arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
    >
      <path d="M9 9C6 8 2 4 0 0C3 7 3 11 0 18C2 14 6 10 9 9Z" fill="#8D8BE5" />
    </svg>
  );
};

export interface IHomeButton {
  title: string;
  description: string;
  image: any;
}

export default function Button({ title, description, image }: IHomeButton) {
  return (
    <div className={styles.button}>
      <div className={styles.button__inner}>
        <div className={styles.inner__left}>
          <div className={styles.inner__image}>
            <img src={image} />
          </div>
          <div className={styles.inner__info}>
            <div className={styles.info__title}>
              <span className={styles.title__text}>{title}</span>
            </div>
            <div className={styles.info__description}>
              <span className={styles.description__text}>{description}</span>
            </div>
          </div>
        </div>
        <div className={styles.inner__arrow}>{arrow()}</div>
      </div>
    </div>
  );
}
