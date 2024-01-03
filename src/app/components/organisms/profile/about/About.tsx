import React from "react";
import styles from "./About.module.css";
import ReviewStars from "@/app/components/atoms/reviewStars/ReviewStars";

export interface IProfileAbout {
  name: string;
  rating: number;
  avatar: any;
  experience: number;
  likes: number;
  description: string;
}

export default function About({
  avatar,
  name,
  description,
  rating,
  likes,
  experience,
}: IProfileAbout) {
  return (
    <div className={styles.about}>
      <div className={styles.about__inner}>
        <div className={styles.inner__about}>
          <div className={styles.about__info}>
            <div className={styles.info__avatar}>
              <img src={avatar} />
            </div>
            <div className={styles.info__general}>
              <div className={styles.general__name}>
                <span className={styles.name__text}>{name}</span>
              </div>
              <div className={styles.general__stats}>
                <div className={styles.stats__rating}>
                  <div className={styles.rating__number}>
                    <span className={styles.number__text}>{likes}</span>
                  </div>
                  <div className={styles.rating__title}>
                    <span className={styles.title__text}>оценок</span>
                  </div>
                </div>
                <div className={styles.stats__reviews}>
                  <div className={styles.reviews__number}>
                    <span className={styles.number__text}>{rating}+</span>
                  </div>
                  <div className={styles.reviews__title}>
                    <span className={styles.title__text}>рейтинг</span>
                  </div>
                </div>
                <div className={styles.stats__likes}>
                  <div className={styles.likes__number}>
                    <span className={styles.number__text}>
                      {experience}+ года
                    </span>
                  </div>
                  <div className={styles.likes__title}>
                    <span className={styles.title__text}>опыта работы</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about__rating}>
            <div className={styles.rating__title}>
              <span className={styles.title__text}>Рейтинг психолога</span>
            </div>
            <div className={styles.rating__stars}>
              <ReviewStars gap={5} isMed rating={rating} />
            </div>
          </div>
        </div>
        <div className={styles.inner__description}>
          <div className={styles.description__title}>
            <span className={styles.title__text}>О себе</span>
          </div>
          <div className={styles.description__info}>
            <span className={styles.info__text}>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
