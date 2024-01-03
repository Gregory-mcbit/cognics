import React from "react";
import styles from "./Specialists.module.css";
import AboutSpecialists from "@/app/components/organisms/aboutSpecialists/AboutSpecialists";
import card1 from "@/app/static/png/index/card1.png";
import Card from "@/app/components/organisms/card/Card";

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
];

export default function Specialists() {
  return (
    <div className={styles.specialists}>
      <AboutSpecialists />
      <div className={styles.specialists__list}>
        {cardData.map((item, index) => (
          <Card key={`card-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
