import React from "react";
import styles from "./Item.module.css";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M20 9.99287C16.077 10.3493 13.8231 10.6771 12.4394 11.7605C10.8131 13.0292 10.428 15.3528 10 20C9.55777 15.1818 9.15835 12.8724 7.37518 11.6322C5.99144 10.6629 3.75178 10.3493 0 10.0071C3.9087 9.65075 6.17689 9.32288 7.54636 8.25374C9.18688 6.97078 9.57204 4.66144 10 0C10.3994 4.29081 10.7561 6.58589 12.0827 7.91162C13.4094 9.23735 15.7204 9.60798 20 9.99287Z"
        fill="white"
      />
    </svg>
  );
};

export default function Item({ title }: { title: string }) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>{star()}</div>
      <div className={styles.item__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
    </div>
  );
}
