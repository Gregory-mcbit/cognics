import React from "react";
import styles from "./Quote.module.css";
import quoteImage from "@/app/static/png/index/quote.png";

export default function Quote() {
  return (
    <div className={styles.quote}>
      <div className={styles.quote__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>Мы продвигаем методы кпт</span>
        </div>
        <div className={styles.inner__body}>
          <span className={styles.body__text}>
            Мы рады, что вы выбрали именно наш сервис. Это способствует
            продвижению методов КПТ в массы. С вами у нас получится, помочь
            людям разобраться в себе и стать счастливее.
          </span>
        </div>
        <div className={styles.inner__author}>
          <div className={styles.author__name}>
            <span className={styles.name__text}>Артур Дмитриев</span>
          </div>
          <div className={styles.author__role}>
            <span className={styles.role__text}>
              Основатель компании Cognics
            </span>
          </div>
        </div>
      </div>
      <div className={styles.quote__image}>
        <img src={quoteImage.src} />
      </div>
    </div>
  );
}
