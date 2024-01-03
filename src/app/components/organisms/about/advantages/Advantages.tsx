import React from "react";
import styles from "./Advantages.module.css";
import advImage from "@/app/static/png/index/aboutAdv1.png";

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
        fill="#8D8BE5"
      />
    </svg>
  );
};

const link = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect
        width="30"
        height="30"
        rx="15"
        transform="matrix(1 0 0 -1 0 30)"
        fill="#8D8BE5"
      />
      <path
        d="M20.2891 20.2891C19.1932 17.9023 19.294 14.7174 20.5219 11.2123L17.1971 14.5371C13.1973 12.1392 11.0921 10.5026 7.64066 7.66891C10.6529 11.1745 12.3206 13.3246 14.5372 17.197L11.2124 20.5218C14.7174 19.2939 17.9024 19.1932 20.2891 20.2891Z"
        fill="white"
      />
    </svg>
  );
};

export default function Advantages() {
  return (
    <div className={styles.advatanges}>
      <div className={styles.advantages__item_long}>
        <div className={styles.item_long__inner}>
          <div className={styles.inner__info}>
            <div className={styles.info__title}>
              <span className={styles.title__text}>
                «Мы продвигаем методы кпт!»
              </span>
            </div>
            <div className={styles.info__quote}>
              <div className={styles.quote__image}>{star()}</div>
              <div className={styles.quote__title}>
                <span className={styles.title__text}>
                  Цитата основателя сервиса Cognics
                </span>
              </div>
            </div>
          </div>
          <div className={styles.inner__image}>
            <img src={advImage.src} />
          </div>
        </div>
      </div>
      <div className={styles.advantages__item}>
        <div className={styles.item__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>
              Почему мы делаем, то что делаем?
            </span>
          </div>
          <div className={styles.inner__info}>
            <div className={styles.info__description}>
              <span className={styles.description__text}>
                История основателя компании
              </span>
            </div>
            <div className={styles.info__image}>{link()}</div>
          </div>
        </div>
      </div>
      <div className={styles.advantages__item}>
        <div className={styles.item__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>
              почему cognics использует кпт?
            </span>
          </div>
          <div className={styles.inner__info}>
            <div className={styles.info__description}>
              <span className={styles.description__text}>
                Принципы работы нашего метода
              </span>
            </div>
            <div className={styles.info__image}>{link()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
