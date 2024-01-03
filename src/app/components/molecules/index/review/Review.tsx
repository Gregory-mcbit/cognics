import React from "react";
import styles from "./Review.module.css";
import Image from "next/image";
import ReviewStars from "@/app/components/atoms/reviewStars/ReviewStars";

export interface IReview {
  name: string;
  date: string;
  avatar: any;
  rating: number;
  description: string;
}

export default function Review({
  name,
  date,
  avatar,
  rating,
  description,
}: IReview) {
  return (
    <div className={styles.review}>
      <div className={styles.review__inner}>
        <div className={styles.inner__heading}>
          <div className={styles.heading__avatar}>
            <Image
              src={avatar}
              alt=""
              width={70}
              height={70}
              unoptimized
              className={styles.avatar__img}
            />
          </div>
          <div className={styles.heading__date}>
            <span className={styles.date__text}>{date}</span>
          </div>
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>{description}</span>
        </div>
        <div className={styles.inner__footer}>
          <div className={styles.footer__name}>
            <span className={styles.name__text}>{name}</span>
          </div>
          <div className={styles.footer__rating}>
            <ReviewStars rating={rating} isSmall />
          </div>
        </div>
      </div>
    </div>
  );
}
