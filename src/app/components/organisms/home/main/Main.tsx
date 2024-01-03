"use client";

import React from "react";
import styles from "./Main.module.css";
import Calendar from "../calendar/Calendar";

const clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.1716 2.18164C6.65164 2.18164 2.18164 6.66164 2.18164 12.1816C2.18164 17.7016 6.65164 22.1816 12.1716 22.1816C17.7016 22.1816 22.1816 17.7016 22.1816 12.1816C22.1816 6.66164 17.7016 2.18164 12.1716 2.18164ZM12.1816 20.1816C7.76164 20.1816 4.18164 16.6016 4.18164 12.1816C4.18164 7.76164 7.76164 4.18164 12.1816 4.18164C16.6016 4.18164 20.1816 7.76164 20.1816 12.1816C20.1816 16.6016 16.6016 20.1816 12.1816 20.1816ZM11.9616 7.18164H11.9016C11.5016 7.18164 11.1816 7.50164 11.1816 7.90164V12.6216C11.1816 12.9716 11.3616 13.3016 11.6716 13.4816L15.8216 15.9716C16.1616 16.1716 16.6016 16.0716 16.8016 15.7316C16.8519 15.6507 16.8853 15.5604 16.8999 15.4663C16.9145 15.3721 16.91 15.276 16.8866 15.1836C16.8633 15.0912 16.8216 15.0045 16.7641 14.9286C16.7065 14.8526 16.6343 14.7891 16.5516 14.7416L12.6816 12.4416V7.90164C12.6816 7.50164 12.3616 7.18164 11.9616 7.18164Z"
        fill="black"
      />
    </svg>
  );
};

const arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
    >
      <path
        d="M6 22C7.05882 18.8913 8.11765 16.2609 12 14.2283H8.11765C6.80371 8.51752 6.50677 5.61017 6 0C5.5953 5.81795 5.24054 8.79308 3.88235 14.2283L0 14.2283C3.88235 16.2609 4.94118 18.8913 6 22Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__calendar}>
        <Calendar />
      </div>
      <div className={styles.main__sessions}>
        <div className={styles.sessions__inner}>
          <div className={styles.inner__left}>
            <div className={styles.left__heading}>
              <div className={styles.heading__caption}>
                <div className={styles.caption__image}>{clock()}</div>
                <div className={styles.caption__title}>
                  <span className={styles.title__text}>Ближайшая сессия</span>
                </div>
              </div>
              <div className={styles.heading__description}>
                <span className={styles.description__text}>
                  Мы поможем не пропустить сессию!
                </span>
              </div>
            </div>
            <div className={styles.left__psycho}>
              <div className={styles.psycho__title}>
                <span className={styles.title__text}>Психолог</span>
              </div>
              <div className={styles.psycho__name}>
                <span className={styles.name__text}>Венюков Ф.С.</span>
              </div>
            </div>
            <div className={styles.left__date}>
              <div className={styles.date__title}>
                <span className={styles.title__text}>Дата</span>
              </div>
              <div className={styles.date__name}>
                <span className={styles.name__text}>20 Августа</span>
              </div>
            </div>
          </div>
          <div className={styles.inner__separator} />
          <div className={styles.inner__right}>
            <div className={styles.right__start}>
              <div className={styles.start__title}>
                <span className={styles.title__text}>Начало</span>
              </div>
              <div className={styles.start__time}>
                <span className={styles.time__text}>18:30</span>
              </div>
            </div>
            <div className={styles.right__arrow}>{arrow()}</div>
            <div className={styles.right__start}>
              <div className={styles.start__title}>
                <span className={styles.title__text}>Конец</span>
              </div>
              <div className={styles.start__time}>
                <span className={styles.time__text}>19:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
