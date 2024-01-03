import React from "react";
import styles from "./Results.module.css";
import card1 from "@/app/static/png/index/card1.png";
import Card from "@/app/components/organisms/card/Card";
import moreImage from "@/app/static/png/index/more.png";

const arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
    >
      <path
        d="M1 1L10.2929 10.2929C10.6834 10.6834 11.3166 10.6834 11.7071 10.2929L21 1"
        stroke="#BBBCC1"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

const cardData = [
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.9,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.9,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.1,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.1,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.1,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.1,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
  {
    name: "Шаповалова Алина александровна",
    description:
      "Опытный психолог с более чем 5-летним стажем работы. Специализируюсь на когнитивно-поведенческой терапии и помогает клиентам...",
    rating: 4.1,
    reviews: 32,
    avatar: card1.src,
    likes: 90,
  },
];

export default function Results() {
  return (
    <div className={styles.results}>
      <div className={styles.results__heading}>
        <div className={styles.heading__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>
              Специалисты по вашему
              <span className={styles.text__custom}> запросу</span>
            </span>
          </div>
          <div className={styles.inner__filter}>
            <div className={styles.dropdown__body}>
              <div className={styles.body__inner}>
                <div className={styles.body__title}>
                  <span className={styles.title__text}>Новые</span>
                </div>
                <div className={styles.body__arrow}>{arrow()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.results__list}>
        {cardData.map((item, index) => (
          <Card key={`card-${index}`} {...item} />
        ))}
      </div>
      <div className={styles.results__more}>
        <img src={moreImage.src} />
      </div>
    </div>
  );
}
