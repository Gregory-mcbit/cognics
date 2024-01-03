import React from "react";
import styles from "./Qualifications.module.css";
import Item from "./item/Item";

const qualificationsList = [
  {
    title:
      "Московский государственный психолого-педагогический университет (МГППУ)",
  },
  {
    title: "Институт социальной психологии",
  },
  {
    title:
      "Московский государственный университет психологии и социальной работы (МГУПС)",
  },
  {
    title: "Учебный центр имени Н.П. Бехтеревой",
  },
  {
    title:
      "Исследовательский центр клинической психологии, психотерапии и психиатрии",
  },
  {
    title: "Учебный центр имени Ломоносова",
  },
  {
    title: "ИИС по психотерапии и психиатрии",
  },
];

export default function Qualifications() {
  return (
    <div className={styles.qualifications}>
      <div className={styles.qualifications__header}>
        <div className={styles.header__inner}>
          <div className={styles.inner__tab}>
            <span className={styles.tab__text}>Квалификация</span>
          </div>
          <div className={styles.inner__tab}>
            <span className={styles.tab__text}>Видео-приветствие</span>
          </div>
        </div>
      </div>
      <div className={styles.qualifications__inner}>
        <div className={styles.qualifications__separator} />
        <div className={styles.qualifications__main}>
          <div className={styles.main__list}>
            {qualificationsList.map((item, index) => (
              <Item key={`list-${index}`} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
