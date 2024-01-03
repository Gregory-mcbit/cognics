import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import React from "react";
import workImage from "@/app/static/png/index/workwu.png";
import styles from "./Heading.module.css";

export default function Heading() {
  const buttonStyles: React.CSSProperties = {
    padding: "8px",
  };

  const buttonBlockStyles: React.CSSProperties = {
    background: "#fff",
    borderRadius: "90px",
    border: "none",
  };

  return (
    <div className={styles.heading}>
      <div className={styles.heading__inner}>
        <div className={styles.inner__info}>
          <div className={styles.info__tag}>
            <span className={styles.tag__text}>
              срок обработки заявки 3 дня
            </span>
          </div>
          <div className={styles.info__title}>
            <span className={styles.title__text}>
              Преимущества нашего сервиса
            </span>
          </div>
        </div>
        <div className={styles.info__controls}>
          <LinkButton
            title="Вступайте в семью"
            image={workImage.src}
            imageWidth={40}
            imageHeight={40}
            innerStyle={buttonStyles}
            blockStyle={buttonBlockStyles}
          />
        </div>
      </div>
    </div>
  );
}
