import React from "react";
import styles from "./WhyUs.module.css";
import whyUs1 from "@/app/static/png/index/whyus1.png";
import whyUs2 from "@/app/static/png/index/whyus2.png";
import whyUs3 from "@/app/static/png/index/whyus3.png";
import whyUs4 from "@/app/static/png/index/whyus4.png";
import whyUs5 from "@/app/static/png/index/whyus5.png";
import whyUs6 from "@/app/static/png/index/whyus6.png";
import WhyUs from "@/app/components/molecules/index/about/whyUs/WhyUs";

const whyUsData = [
  {
    image: whyUs1.src,
    title: "Много направлений",
    description:
      "Психологическая поддержка и терапия клиентов с различными расстройствами психики.",
  },
  {
    image: whyUs2.src,
    title: "особый отбор ",
    description:
      "Отбор специалистов с помощью специально разработанной методики для проверки клинической  подготовки.",
  },
  {
    image: whyUs3.src,
    title: "Лучшие методики",
    description: "Психологи работают в методах имеющих научное обоснование.",
  },
  {
    image: whyUs4.src,
    title: "Состояние психологов",
    description:
      "Сотрудничество клинических психологов с опытными врачами-психиатрами.",
  },
  {
    image: whyUs5.src,
    title: "Хорошее образование",
    description:
      "Образование психологов исключительно в области клинической психологии. Постоянное повышение квалификации.",
  },
  {
    image: whyUs6.src,
    title: "Знание психиатрии",
    description:
      "Специалистами имеющими опыт работы в клинически направленной разговорной терапии научно доказанным методом.",
  },
];

export default function TWhyUs() {
  return (
    <div className={styles.why_us}>
      {whyUsData.map((item, index) => (
        <WhyUs key={`why-us-${index}`} {...item} />
      ))}
    </div>
  );
}
