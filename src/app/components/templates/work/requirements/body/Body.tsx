import React from "react";
import styles from "./Body.module.css";
import Requirement from "./requirement/Requirement";
import image from "@/app/static/png/index/requirementImagea.png";

const list = [
  {
    title: "Образование по клинической психологии 37.05.01",
  },
  {
    title: "Сертификаты, подтверждающие постоянное повышение квалификации.",
  },
  {
    title: "Опыт работы в методе.",
  },
  {
    title:
      "Дополнительное обучение в методах КПТ, РЭПТ, ДБТ. Не менее 200 часов.",
  },
  {
    title:
      "Супервизия, личная терапия с письмом подтверждающим ее прохождение, наличие связи с психиатром с которым можно в паре вести клиента. ",
  },
];

export default function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.body__inner}>
        <div className={styles.inner__list}>
          {list.map((item: any, index: any) => (
            <Requirement key={`requirement-${index}`} title={item.title} />
          ))}
        </div>
        <div className={styles.inner__image}>
          <img src={image.src} />
        </div>
      </div>
    </div>
  );
}
