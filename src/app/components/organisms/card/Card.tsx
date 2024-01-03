import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import checkmarkImage from "@/app/static/png/index/checkmarka.png";
import LinkButton from "../../atoms/buttons/linkButton/LinkButton";
import { purpleLinkSvg } from "../../../../../public/assets/svg/links/Links";
import ReviewStars from "../../atoms/reviewStars/ReviewStars";

export interface ICard {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  avatar: any;
  likes: number;
}

const buttonStyles = {
  padding: "2px 8px 3px 12px",
};

const coloredStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M10.3422 0.704793C10.828 -0.234931 12.1719 -0.234931 12.6578 0.704793L15.7519 6.68891C15.8759 6.9287 16.0713 7.12409 16.3111 7.24808L22.2952 10.3422C23.2349 10.828 23.2349 12.1719 22.2952 12.6578L16.3111 15.7519C16.0713 15.8759 15.8759 16.0713 15.7519 16.3111L12.6578 22.2952C12.1719 23.2349 10.828 23.2349 10.3422 22.2952L7.24808 16.3111C7.12409 16.0713 6.9287 15.8759 6.68891 15.7519L0.704793 12.6578C-0.234931 12.1719 -0.234931 10.828 0.704793 10.3422L6.68891 7.24808C6.9287 7.12409 7.12409 6.9287 7.24808 6.68891L10.3422 0.704793Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Card({
  name,
  description,
  rating,
  reviews,
  avatar,
  likes,
}: ICard) {
  const getStars = Math.round(rating);

  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.inner__heading}>
          <div className={styles.heading__image}>
            <Image
              src={avatar}
              alt=""
              width={86}
              height={86}
              unoptimized
              className={styles.image__img}
            />
          </div>
          <div className={styles.heading__rating}>
            <div className={styles.rating__title}>
              <span className={styles.title__text}>Рейтинг психолога:</span>
            </div>
            <ReviewStars rating={rating} />
          </div>
        </div>
        <div className={styles.inner__name}>
          <span className={styles.name__text}>{name}</span>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>{description}</span>
        </div>
        <div className={styles.inner__stats}>
          <div className={styles.stats__rating}>
            <div className={styles.rating__number}>
              <span className={styles.number__text}>{rating}</span>
            </div>
            <div className={styles.rating__title}>
              <span className={styles.title__text}>рейтинг</span>
            </div>
          </div>
          <div className={styles.stats__reviews}>
            <div className={styles.reviews__number}>
              <span className={styles.number__text}>{reviews}+</span>
            </div>
            <div className={styles.reviews__title}>
              <span className={styles.title__text}>отзывов</span>
            </div>
          </div>
          <div className={styles.stats__likes}>
            <div className={styles.likes__number}>
              <span className={styles.number__text}>{likes}+</span>
            </div>
            <div className={styles.likes__title}>
              <span className={styles.title__text}>оценок</span>
            </div>
          </div>
        </div>
        <div className={styles.inner__footer}>
          <div className={styles.footer__media}>
            <div className={styles.media__image}>
              <img src={checkmarkImage.src} />
            </div>
            <div className={styles.media__title}>
              <span className={styles.title__text}>
                У меня есть видео-приветствие
              </span>
            </div>
          </div>
          <div className={styles.footer__button}>
            <LinkButton
              image={purpleLinkSvg()}
              innerStyle={buttonStyles}
              title="Подробнее"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
