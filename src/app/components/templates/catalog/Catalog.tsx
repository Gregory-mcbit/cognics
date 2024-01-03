import React from "react";
import styles from "./Catalog.module.css";
import Filters from "./filters/Filters";
import catalogImage from "@/app/static/png/index/cataloga.png";

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
        d="M18 8.99359C14.4693 9.31433 12.4408 9.60941 11.1954 10.5845C9.73181 11.7263 9.38516 13.8175 9 18C8.602 13.6636 8.24251 11.5852 6.63766 10.469C5.3923 9.59658 3.3766 9.31433 0 9.00641C3.51783 8.68567 5.5592 8.39059 6.79173 7.42837C8.26819 6.2737 8.61484 4.1953 9 0C9.35949 3.86173 9.68046 5.9273 10.8745 7.12046C12.0685 8.31361 14.1484 8.64718 18 8.99359Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function CatalogSearch() {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__inner}>
        <div className={styles.catalog__title}>
          <span className={styles.title__text}>
            Подобрать
            <span className={styles.text__custom}> психолога{star()}</span>
          </span>
        </div>
        <Filters />
        <div className={styles.catalog__controls}>
          <div className={styles.controls__search}>
            <button className={styles.search__button}>
              Подобрать психолога
            </button>
          </div>
          <div className={styles.controls__description}>
            <span className={styles.description__text}>
              По вашему запросу найдено специалистов: 750
            </span>
          </div>
        </div>
      </div>
      <div className={styles.catalog__image}>
        <img src={catalogImage.src} />
      </div>
    </div>
  );
}
