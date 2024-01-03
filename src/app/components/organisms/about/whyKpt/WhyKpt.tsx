import React from "react";
import styles from "./WhyKpt.module.css";

import illustrationBackground from "@/app/static/png/index/illustr.png";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import { purpleLink40 } from "../../../../../../public/assets/svg/links/Links";
import docsImage from "@/app/static/png/index/docs.png";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M21 10.4925C16.8809 10.8667 14.5143 11.211 13.0613 12.3485C11.3538 13.6807 10.9494 16.1205 10.5 21C10.0357 15.9408 9.61626 13.516 7.74394 12.2138C6.29101 11.196 3.93937 10.8667 0 10.5075C4.10414 10.1333 6.48573 9.78902 7.92368 8.66643C9.64622 7.31932 10.0506 4.89451 10.5 0C10.9194 4.50535 11.2939 6.91518 12.6869 8.3072C14.0799 9.69922 16.5064 10.0884 21 10.4925Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const buttonStyles: React.CSSProperties = {
  padding: "8px 9px 7px 22px",
};

const buttonBlockStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "90px",
  border: "none",
};

const illustrationStyles: React.CSSProperties = {
  backgroundImage: `url(${illustrationBackground.src})`,
};

export default function WhyKpt() {
  return (
    <div className={styles.whykpt}>
      <div className={styles.whykpt__title}>
        <span className={styles.title__text}>почему мы используем </span>
      </div>
      <div className={styles.whykpt__colored_title}>
        <span className={styles.colored_title__text}>
          Когнитивно-поведенческую терапию{star()}
        </span>
      </div>
      <div className={styles.whykpt__info}>
        <div className={styles.info__container}>
          <div className={styles.info__about}>
            <div className={styles.about__inner}>
              <div className={styles.inner__title}>
                <span className={styles.title__text}>
                  Что из себя
                  <span className={styles.text__custom}>
                    {" "}
                    представляет наш
                  </span>{" "}
                  метод?
                </span>
              </div>
              <div className={styles.inner__narative}>
                <span className={styles.effective__text}>
                  {`Когнитивно-поведенческая терапия (КПТ) - это метод психотерапии, основанный на работе с мыслями, поведением и эмоциями пациента.\n\n В рамках КПТ пациент учится распознавать и изменять негативные мысли и привычки поведения, которые могут способствовать развитию психических расстройств, таких как депрессия, тревожные расстройства, фобии и другие.\n\n КПТ основана на предположении, что наши мысли, чувства и поведение взаимосвязаны, и изменение одного из этих элементов может привести к изменению других.\n\n Данный метод может включать в себя различные техники, такие как когнитивная реструктуризация, экспозиция, расслабление мышц и другие, и проводится на протяжении нескольких сеансов.\n\n Когнитивно-поведенческая терапия является одним из наиболее эффективных методов психотерапии, подтвержденных исследованиями.`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.info__effective}>
            <div className={styles.effective__inner}>
              <div className={styles.effective__image}>
                <img src={docsImage.src} />
              </div>
              <div className={styles.effective__info}>
                <div className={styles.info__title}>
                  <span className={styles.title__text}>
                    КПТ является одним из наиболее эффективных методов
                    психотерапии, подтвержденных исследованиями.
                  </span>
                </div>
                <div className={styles.info__description}>
                  <span className={styles.description__text}>
                    *Когнитивно-поведенческая терапия
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={illustrationStyles} className={styles.info__illustration}>
          <div className={styles.illustration__button}>
            <LinkButton
              title="Перейти в каталог"
              image={purpleLink40()}
              innerStyle={buttonStyles}
              blockStyle={buttonBlockStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
