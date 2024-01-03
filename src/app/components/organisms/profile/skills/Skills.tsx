import React from "react";
import styles from "./Skills.module.css";
import Item from "./item/Item";

export enum ETagPositions {
  POS_RIGHT = 0,
  POS_LEFT,
}

const forWhomList = [
  {
    title: "Взрослые",
    starPosition: ETagPositions.POS_RIGHT,
  },
  {
    title: "Подростки",
    starPosition: ETagPositions.POS_LEFT,
  },
  {
    title: "Дети",
    starPosition: ETagPositions.POS_RIGHT,
  },
];

const vectorList = [
  {
    title: "Зависимости",
    starPosition: ETagPositions.POS_RIGHT,
  },
  {
    title: "Тревога",
  },
  {
    title: "Асоциальное поведение",
    starPosition: ETagPositions.POS_RIGHT,
  },
];

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__for_whom}>
        <div className={styles.for_whom__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>Кому обращаться?</span>
          </div>
          <div className={styles.inner__list}>
            {forWhomList.map((item, index) => (
              <Item key={`list-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.skills__vector}>
        <div className={styles.vector__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>С чем работает?</span>
          </div>
          <div className={styles.inner__list}>
            {vectorList.map((item, index) => (
              <Item key={`list-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
