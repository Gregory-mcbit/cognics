import React from "react";
import styles from "./Chat.module.css";
import messageImage from "@/app/static/png/index/message.png";

export interface IChat {
  name: string;
  description: string;
  avatar: any;
  isMessage?: boolean;
  time: string;
  isTag?: boolean;
}

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M12 5.99572C9.64622 6.20955 8.29387 6.40627 7.46362 7.05631C6.48787 7.81753 6.25678 9.21169 6 12C5.73466 9.10905 5.49501 7.72345 4.42511 6.97933C3.59486 6.39772 2.25107 6.20955 0 6.00428C2.34522 5.79045 3.70613 5.59373 4.52782 4.95225C5.51213 4.18247 5.74322 2.79686 6 0C6.23966 2.57448 6.45364 3.95153 7.24964 4.74697C8.04565 5.54241 9.43224 5.76479 12 5.99572Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Chat({
  name,
  description,
  avatar,
  isMessage,
  time,
  isTag,
}: IChat) {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__inner}>
        <div className={styles.inner__info}>
          <div className={styles.info__avatar}>
            <img src={avatar} />
          </div>
          <div className={styles.info__about}>
            <div className={styles.about__heading}>
              <div className={styles.heading__name}>
                <span className={styles.name__text}>{name}</span>
              </div>
              {isTag && (
                <div className={styles.heading__tag}>
                  <div className={styles.tag__inner}>
                    <div className={styles.inner__title}>
                      <span className={styles.title__text}>Психолог</span>
                    </div>
                    <div className={styles.inner__image}>{star()}</div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.about__description}>
              <span className={styles.description__text}>{description}</span>
            </div>
          </div>
        </div>
        <div className={styles.inner__date}>
          <div className={styles.date__time}>
            <span className={styles.time__text}>{time}</span>
          </div>
          {isMessage && (
            <div className={styles.date__message}>
              <img src={messageImage.src} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
