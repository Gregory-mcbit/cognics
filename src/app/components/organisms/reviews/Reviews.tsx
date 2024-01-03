"use client";

import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import review1 from "@/app/static/png/index/review1.png";
import review2 from "@/app/static/png/index/review2.png";
import review3 from "@/app/static/png/index/review3.png";
import review4 from "@/app/static/png/index/review1.png";
import review5 from "@/app/static/png/index/review1.png";
import Review, { IReview } from "../../molecules/index/review/Review";
import { CarouselReducer } from "@/app/utils/CarouselSDK";
import { AnimatePresence, motion } from "framer-motion";

const leftArrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
    >
      <path
        d="M0 9C4.23913 7.41176 7.82609 5.82353 10.5978 0V5.82353C18.3852 7.79444 20.3498 8.23984 28 9C20.0664 9.60704 18.0094 10.1392 10.5978 12.1765V18C7.82609 12.1765 4.23913 10.5882 0 9Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const rightArrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
    >
      <path
        d="M28 9C23.7609 7.41176 20.1739 5.82353 17.4022 0V5.82353C9.6148 7.79444 7.65024 8.23984 0 9C7.93356 9.60704 9.99055 10.1392 17.4022 12.1765V18C20.1739 12.1765 23.7609 10.5882 28 9Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const reviews: IReview[] = [
  {
    avatar: review1.src,
    date: "1  неделю назад",
    description:
      "“Я была очень довольна работой сайта. Я нашла опытного специалиста, который смог помочь мне. Я рада что выбрала этот сервис!”",
    name: "Яна Максимова",
    rating: 5,
  },
  {
    avatar: review1.src,
    date: "1  неделю назад",
    description:
      "“Я была очень довольна работой сайта. Я нашла опытного специалиста, который смог помочь мне. Я рада что выбрала этот сервис!”",
    name: "Яна Максимова",
    rating: 5,
  },
  {
    avatar: review1.src,
    date: "1  неделю назад",
    description:
      "“Я была очень довольна работой сайта. Я нашла опытного специалиста, который смог помочь мне. Я рада что выбрала этот сервис!”",
    name: "Яна Максимова",
    rating: 5,
  },
];

export default function Reviews() {
  const [currId, setCurrId] = useState(0);
  const maxId = reviews.length - 1;
  const reviewWidth = 390;
  let autoScrollTimer: NodeJS.Timeout;

  const autoScroll = () => {
    // clearTimeout(autoScrollTimer);
    // autoScrollTimer = setTimeout(() => {
    //   const nextId = currId < maxId ? currId + 1 : 0;
    //   setCurrId(nextId);
    //   autoScroll();
    // }, 5000);
  };

  const handleNext = () => {
    clearTimeout(autoScrollTimer);
    CarouselReducer({ setId: setCurrId, currId, maxId, action: "next" });
    autoScroll();
  };

  const handlePrev = () => {
    clearTimeout(autoScrollTimer);
    CarouselReducer({ setId: setCurrId, currId, maxId, action: "prev" });
    autoScroll();
  };

  useEffect(() => {
    autoScroll();
    return () => clearTimeout(autoScrollTimer);
  }, []);

  const xOffset = -(reviewWidth * currId);

  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__left_arrow} onClick={handlePrev}>
        {leftArrowSvg()}
      </div>
      <div className={styles.reviews__scroll_container}>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.reviews__inner}
            animate={{ x: `${xOffset}px` }}
            initial={{ x: "0%" }}
            transition={{ type: "ease-in-out", duration: 0.3 }}
          >
            {reviews.map((item, index) => (
              <Review key={`review-${index}`} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.reviews__right_arrow} onClick={handleNext}>
        {rightArrowSvg()}
      </div>
    </div>
  );
}
