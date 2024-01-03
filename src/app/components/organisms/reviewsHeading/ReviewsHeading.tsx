import React from "react";
import styles from "./ReviewsHeading.module.css";
import LinkButton from "../../atoms/buttons/linkButton/LinkButton";
import { purpleLinkSvg } from "../../../../../public/assets/svg/links/Links";

const buttonStyles = {
  padding: "5px 7px 4px 25px",
};

export default function ReviewsHeading() {
  return (
    <div className={styles.reviews_heading}>
      <div className={styles.reviews_heading__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>Отзывы клиентов</span>
        </div>
        <div className={styles.inner__button}>
          <LinkButton
            image={purpleLinkSvg()}
            innerStyle={buttonStyles}
            title="Больше отзывов"
          />
        </div>
      </div>
    </div>
  );
}
