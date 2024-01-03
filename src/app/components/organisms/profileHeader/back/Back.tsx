"use client";

import React from "react";
import styles from "./Back.module.css";
import { GoToUrl } from "@/app/utils/GoToUrl";
import { useRouter } from "next/navigation";

const arrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="12"
      viewBox="0 0 23 12"
      fill="none"
    >
      <path
        d="M0 6C3.1087 4.94118 5.73913 3.88235 7.77174 0V3.88235C13.4825 5.19629 17.3898 5.49323 23 6C17.1821 6.4047 13.2069 6.75946 7.77174 8.11765V12C5.73913 8.11765 3.1087 7.05882 0 6Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Back() {
  const router = useRouter();

  return (
    <div onClick={() => GoToUrl(router, "/")} className={styles.back}>
      <div className={styles.back__arrow}>{arrowSvg()}</div>
      <div className={styles.back__title}>
        <span className={styles.title__text}>Назад</span>
      </div>
    </div>
  );
}
