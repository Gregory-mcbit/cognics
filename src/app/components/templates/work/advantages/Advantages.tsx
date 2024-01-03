import React from "react";
import styles from "./Advantages.module.css";
import Heading from "./heading/Heading";
import Advantage from "./advantage/Advantage";
import arrowImage from "@/app/static/png/index/arrowImg.png";

const advantages = [
  {
    ml: 0,
    mt: 0,
    number: "01",
    footerNumber: "1",
    infoTitle: "Преимущество сервиса",
    dataTitle: "только клиенты с желаемыми запросами",
    description:
      "У вас будут только те клиенты, которые подходят по вамему запросу.",
  },
  {
    ml: 311,
    mt: 80,
    number: "02",
    footerNumber: "2",
    infoTitle: "Преимущество сервиса",
    dataTitle: "быстро отвечаем на любые вопросы",
    description:
      "Мы всегда на связи и готовы проконсультировать вас по любым вопросам.",
  },
  {
    ml: 41,
    mt: 120,
    number: "03",
    footerNumber: "3",
    infoTitle: "Преимущество сервиса",
    dataTitle: "возможность отмены сессии за 24 часа",
    description:
      "Наш сервис понимает, что обстоятельства бывают разные, поэтому сессию можно отменить.",
  },
  {
    ml: 374,
    mt: 93,
    number: "04",
    footerNumber: "4",
    infoTitle: "Преимущество сервиса",
    dataTitle: "своевремменны выплаты",
    description:
      "Мы заботимся как о наших клиентах, так и о психологах, поэтому не задерживаем выплаты.",
  },
];

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <Heading />
      <div className={styles.advantages__list}>
        {advantages.map((item, index) => (
          <div
            style={{
              marginTop: item.mt,
              marginLeft: item.ml,
            }}
            className={styles.list__item}
          >
            <Advantage key={`advantage-${index}`} {...item} />
          </div>
        ))}
        <div className={styles.list__arrow}>
          <img src={arrowImage.src} />
        </div>
      </div>
    </div>
  );
}
