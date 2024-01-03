import React from "react";
import styles from "./Reason.module.css";
import Image from "next/image";

export default function Reason({
  maxWidth,
  img,
  title,
  text,
  gap,
}: {
  img: any;
  title: string;
  text: string;
  gap: number;
  maxWidth: number;
}) {
  return (
    <div
      style={{
        gap,
      }}
      className={styles.reason}
    >
      <div className={styles.reason__image}>
        <img src={img} />
      </div>
      <div
        style={{
          maxWidth,
        }}
        className={styles.reason__narrative}
      >
        <div className={styles.narrative__title}>
          <span className={styles.title__text}>{title}</span>
        </div>
        <div className={styles.narrative__main}>
          <span className={styles.main__text}>{text}</span>
        </div>
      </div>
    </div>
  );
}
