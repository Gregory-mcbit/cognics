import React from "react";
import styles from "./About.module.css";
import Illustration from "@/app/components/molecules/index/illustration/Illustration";
import Introduction from "@/app/components/molecules/index/introduction/Introduction";
import Advantages from "@/app/components/molecules/index/about/advantages/Advantages";
import Advantage from "@/app/components/molecules/index/about/advantage/Advantage";
import Information from "@/app/components/molecules/index/about/information/Information";

const advantages = [
  {
    title: "служба поддержки",
    description: "Круглосуточно",
    status: "24 / 7",
  },
  {
    title: "Конфиденциальность",
    description: "Вы в надёжныйх руках",
    status: "100%",
  },
  {
    title: "нас всё больше",
    description: "Мы быстро растём",
    status: "2x / день",
  },
];

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <Illustration />
        <div className={styles.about__info}>
          <Introduction />
          <Advantages />
        </div>
      </div>
      <div className={styles.about__advantages}>
        {advantages.map((item, index) => (
          <Advantage key={`advantage-${index}`} {...item} />
        ))}
      </div>
      <div className={styles.about__information}>
        <Information />
      </div>
    </div>
  );
}
