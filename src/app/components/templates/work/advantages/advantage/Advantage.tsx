import React from "react";
import styles from "./Advantage.module.css";

interface IAdvantage {
  number: string;
  footerNumber: string;
  infoTitle: string;
  dataTitle: string;
  description: string;
}

export default function Advantage({
  number,
  footerNumber,
  infoTitle,
  dataTitle,
  description,
}: IAdvantage) {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantage__info}>
        <div className={styles.info__inner}>
          <div className={styles.inner__number}>
            <span className={styles.number__text}>{number}</span>
          </div>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>{infoTitle}</span>
          </div>
        </div>
      </div>
      <div className={styles.advantage__data}>
        <div className={styles.data__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>{dataTitle}</span>
          </div>
          <div className={styles.inner__footer}>
            <div className={styles.footer__description}>
              <span className={styles.description__text}>{description}</span>
            </div>
            <div className={styles.footer__number}>
              <span className={styles.number__text}>{footerNumber} Пункт</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
