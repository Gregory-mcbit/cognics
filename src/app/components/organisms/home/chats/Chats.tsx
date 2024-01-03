import React from "react";
import styles from "./Chats.module.css";
import avatar from "@/app/static/png/index/recentAvatar.png";
import Chat from "./chat/Chat";

const chatsRecent = [
  {
    name: "Мария",
    isTag: true,
    time: "17:25",
    description:
      "Привет, мне не раз приходилось консультировать людей по этой...",
    isMessage: true,
    avatar: avatar.src,
  },
];

const chatsHistory = [
  {
    name: "Анастасия",
    time: "18 августа",
    description: "Что же, ладно",
    avatar: avatar.src,
  },
  {
    name: "Анастасия",
    time: "18 августа",
    description: "Что же, ладно",
    avatar: avatar.src,
  },
  {
    name: "Анастасия",
    time: "18 августа",
    description: "Что же, ладно",
    avatar: avatar.src,
  },
];

const statusOnline = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <circle cx="5" cy="5" r="5" fill="#51DB78" />
    </svg>
  );
};

export default function Chats() {
  return (
    <div className={styles.chats}>
      <div className={styles.chats__top}>
        <div className={styles.top__inner}>
          <div className={styles.inner__title}>
            <span className={styles.title__text}>Чат с психологами</span>
          </div>
          <div className={styles.inner__description}>
            <span className={styles.description__text}>
              Общайтесь с психологами в нашем удобном защищённом чате!
            </span>
          </div>
        </div>
      </div>
      <div className={styles.chats__list}>
        <div className={styles.list__profile}>
          <div className={styles.profile__item}>
            <div className={styles.item__avatar}>
              <img src={avatar.src} />
            </div>
            <div className={styles.item__info}>
              <div className={styles.info__name}>
                <span className={styles.name__text}>Иван Бруклинский</span>
              </div>
              <div className={styles.info__status}>
                <div className={styles.status__image}>{statusOnline()}</div>
                <div className={styles.status__title}>
                  <span className={styles.title__text}>В сети</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list__latest_heading}>
          <div className={styles.latest_heading__line} />
          <div className={styles.latest_heading_line}>
            <span className={styles.heading_line__text}>Недавно</span>
          </div>
        </div>
        <div className={styles.list__latest}>
          {chatsRecent.map((item, index) => (
            <Chat key={`chat-r-${index}`} {...item} />
          ))}
        </div>
        <div className={styles.list__latest_heading}>
          <div className={styles.latest_heading__line} />
          <div className={styles.latest_heading_line}>
            <span className={styles.heading_line__text}>Недавно</span>
          </div>
        </div>
        <div className={styles.list__history}>
          {chatsHistory.map((item, index) => (
            <Chat key={`chat-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
