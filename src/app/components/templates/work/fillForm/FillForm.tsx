import React from "react";
import styles from "./FillForm.module.css";
import fill1 from "@/app/static/png/index/fill1.png";
import fill2 from "@/app/static/png/index/fill2.png";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
    >
      <path
        d="M21 10.9353C16.8809 11.3176 14.5143 11.6693 13.0613 12.8316C11.3538 14.1927 10.9494 16.6855 10.5 21.671C10.0357 16.5019 9.61626 14.0245 7.74394 12.694C6.29101 11.654 3.93937 11.3176 0 10.9506C4.10414 10.5682 6.48573 10.2165 7.92368 9.06952C9.64622 7.69314 10.0506 5.21567 10.5 0.214844C10.9194 4.81805 11.2939 7.28023 12.6869 8.70248C14.0799 10.1247 16.5064 10.5224 21 10.9353Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function FillForm() {
  return (
    <div className={styles.fill_form}>
      <div className={styles.fill_form__inner}>
        <div className={styles.inner__title}>
          <span className={styles.title__text}>
            Вступайте в наш
            <span className={styles.text__custom}>
              {" "}
              дружный COGNICS{star()}
            </span>
          </span>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>
            Станьте частью нашей команды. Давайте поможем людям стать осознанней
            вместе!
          </span>
        </div>
        <div className={styles.inner__submit}>
          <span className={styles.submit__text}>Заполнить анкету</span>
        </div>
      </div>
      <div className={styles.fill_form__image_one}>
        <img src={fill1.src} />
      </div>
      <div className={styles.fill_form__image_sec}>
        <img src={fill2.src} />
      </div>
    </div>
  );
}
