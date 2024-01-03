import React from "react";
import styles from "./Info.module.css";
import Image from "next/image";
import smileImage from "@/app/static/png/index/smile.png";

const xSmallStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M17 8.49394C13.6655 8.79686 11.7496 9.07555 10.5735 9.99644C9.19116 11.0748 8.86377 13.0499 8.5 17C8.12411 12.9045 7.78459 10.9416 6.2689 9.88738C5.09272 9.06343 3.18902 8.79686 0 8.50606C3.3224 8.20314 5.25036 7.92445 6.41441 7.01568C7.80885 5.92516 8.13623 3.96222 8.5 0C8.83951 3.64718 9.14265 5.598 10.2703 6.72487C11.398 7.85175 13.3623 8.16679 17 8.49394Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.info__title}>
        <span className={styles.title__text}>
          <span className={styles.text__custom}>начните</span> начните сессию
          уже
          <span className={styles.text__custom}> сегодня</span>
          {xSmallStar()}
        </span>
      </div>
      <div className={styles.info__description}>
        <span className={styles.description__text}>
          Найдите подходящего именно вам психолога, который сможет вас понять, а
          наш сервис с этим поможем!
        </span>
      </div>
      <div className={styles.info__image}>
        <Image
          src={smileImage}
          alt=""
          width={270}
          height={320}
          unoptimized
          className={styles.image__img}
        />
      </div>
    </div>
  );
}
