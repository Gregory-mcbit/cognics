import React from "react";
import styles from "./Sidebar.module.css";
import homeAvatar from "@/app/static/png/index/homeAvatar.png";
import stars from "@/app/static/png/index/stars.png";
import home1 from "@/app/static/png/index/home1.png";
import home2 from "@/app/static/png/index/home2.png";
import home3 from "@/app/static/png/index/home3.png";
import Button from "./button/Button";

const editImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7.5" stroke="white" />
      <path
        d="M7.7028 10.0991L6.31236 8.3633C8 7 10 4.5 10.6475 3.24339C10.8047 3.0769 11.0064 2.99032 11.2124 3.00086C11.4184 3.0114 11.6137 3.11829 11.7595 3.30029C11.9052 3.48229 11.9909 3.72608 11.9993 3.98326C12.0078 4.24043 11.9384 4.49215 11.805 4.68844C10.5 6 8.15244 9.1932 7.7028 10.0991ZM5.68234 9.1932L7.03892 10.8861C6.51881 11.0878 6.43362 11.4352 6.41394 11.9748C5.34873 12.1748 4.83462 12.4252 4 13C4.40986 11.8329 4.62722 11.1773 4.81029 9.97284C5.23558 9.86888 5.42593 9.69677 5.68234 9.1932Z"
        fill="white"
      />
    </svg>
  );
};

const buttons = [
  {
    title: "Тема",
    description: "Классическая",
    image: home1.src,
  },
  {
    title: "Email",
    description: "Ansev123@gmail.com",
    image: home2.src,
  },
  {
    title: "Policy",
    description: "Правила сайта",
    image: home3.src,
  },
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__profile}>
        <div className={styles.profile__inner}>
          <div className={styles.inner__avatar}>
            <img src={homeAvatar.src} />
            <div className={styles.avatar__stars}>
              <img src={stars.src} />
            </div>
          </div>
          <div className={styles.inner__name}>
            <span className={styles.name__text}>Иван Бруклинский</span>
          </div>
          <div className={styles.inner__status}>
            <span className={styles.status__text}>Клиент</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar__change_profile}>
        <div className={styles.change_profile__inner}>
          <div className={styles.inner__edit}>
            <div className={styles.edit__title}>
              <span className={styles.title__text}>Изменить профиль</span>
            </div>
            <div className={styles.edit__image}>{editImage()}</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar__optional}>
        <div className={styles.optional__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>Дополнительно:</span>
          </div>
          <div className={styles.inner__controls}>
            {buttons.map((item, index) => (
              <Button key={`controls-${index}`} {...item} />
            ))}
          </div>
          <div className={styles.inner__about}>
            <div className={styles.about__title}>
              <span className={styles.title__text}>Об аккаунте:</span>
            </div>
            <div className={styles.about__change_password}>
              <span className={styles.change_password__text}>
                Сменить пароль аккаунта
              </span>
            </div>
            <div className={styles.about__exit}>
              <span className={styles.exit__text}>Выйти из аккаунта</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
