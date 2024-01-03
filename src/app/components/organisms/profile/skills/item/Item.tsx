import React from "react";
import styles from "./Item.module.css";
import { ETagPositions } from "../Skills";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.09386 0.551577C8.47412 -0.183859 9.52587 -0.183859 9.90612 0.551577L12.3276 5.2348C12.4246 5.42246 12.5775 5.57537 12.7652 5.67241L17.4484 8.09386C18.1839 8.47412 18.1839 9.52587 17.4484 9.90612L12.7652 12.3276C12.5775 12.4246 12.4246 12.5775 12.3276 12.7652L9.90612 17.4484C9.52587 18.1839 8.47412 18.1839 8.09386 17.4484L5.67241 12.7652C5.57537 12.5775 5.42246 12.4246 5.2348 12.3276L0.551577 9.90612C-0.183859 9.52587 -0.183859 8.47412 0.551577 8.09386L5.2348 5.67241C5.42246 5.57537 5.57537 5.42246 5.67241 5.2348L8.09386 0.551577Z"
        fill="#8D8BE5"
      />
      <path
        d="M8.09386 0.551577C8.47412 -0.183859 9.52587 -0.183859 9.90612 0.551577L12.3276 5.2348C12.4246 5.42246 12.5775 5.57537 12.7652 5.67241L17.4484 8.09386C18.1839 8.47412 18.1839 9.52587 17.4484 9.90612L12.7652 12.3276C12.5775 12.4246 12.4246 12.5775 12.3276 12.7652L9.90612 17.4484C9.52587 18.1839 8.47412 18.1839 8.09386 17.4484L5.67241 12.7652C5.57537 12.5775 5.42246 12.4246 5.2348 12.3276L0.551577 9.90612C-0.183859 9.52587 -0.183859 8.47412 0.551577 8.09386L5.2348 5.67241C5.42246 5.57537 5.57537 5.42246 5.67241 5.2348L8.09386 0.551577Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Item({
  title,
  starPosition,
}: {
  title: string;
  starPosition?: number;
}) {
  return (
    <div className={styles.item}>
      {starPosition === ETagPositions.POS_LEFT && (
        <div className={styles.item__star}>{star()}</div>
      )}
      <div className={styles.item__tag}>
        <div className={styles.tag__title}>
          <span className={styles.title__text}>{title}</span>
        </div>
      </div>
      {starPosition === ETagPositions.POS_RIGHT && (
        <div className={styles.item__star}>{star()}</div>
      )}
    </div>
  );
}
