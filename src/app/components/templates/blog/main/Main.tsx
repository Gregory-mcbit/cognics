import React from "react";
import styles from "./Main.module.css";
import image from "@/app/static/png/index/blogilst.png";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import {
  purpleLink40,
  purpleLinkSvg,
} from "../../../../../../public/assets/svg/links/Links";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M20 9.99287C16.077 10.3493 13.8231 10.6771 12.4394 11.7605C10.8131 13.0292 10.428 15.3528 10 20C9.55777 15.1818 9.15835 12.8724 7.37518 11.6322C5.99144 10.6629 3.75178 10.3493 0 10.0071C3.9087 9.65075 6.17689 9.32288 7.54636 8.25374C9.18688 6.97078 9.57204 4.66144 10 0C10.3994 4.29081 10.7561 6.58589 12.0827 7.91162C13.4094 9.23735 15.7204 9.60798 20 9.99287Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const buttonStyles: React.CSSProperties = {
  padding: "6px 7px 6px 18px",
};

const buttonBlockStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "90px",
};

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__heading}>
        <div className={styles.info__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>
              Узнайте больше
              <span className={styles.text__custom}>
                {" "}
                о психотерапии вместе
              </span>{" "}
              с COGNICS{star()}
            </span>
          </div>
          <div className={styles.inner__button}>
            <LinkButton
              title="Скоро откроемся!"
              image={purpleLinkSvg()}
              innerStyle={buttonStyles}
              blockStyle={buttonBlockStyles}
            />
          </div>
          <div className={styles.inner__description}>
            <span className={styles.description__text}>
              Наш блог представляет собой интерактивный ресурс, где пользователи
              могут найти полезную информацию о различных видах психотерапии,
              психическом здоровье и методах поддержания его уровня.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.main__illustration}>
        <img src={image.src} />
      </div>
    </div>
  );
}
