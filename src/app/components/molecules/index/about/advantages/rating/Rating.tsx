import React from "react";
import styles from "./Rating.module.css";
import Score from "@/app/components/atoms/score/Score";
import Image from "next/image";
import avatarsImage from "@/app/static/png/index/avatars.png";

const arrowImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect width="28" height="28" rx="14" fill="#161616" />
      <rect width="28" height="28" rx="14" fill="white" />
      <path
        d="M20.0919 7.95019C17.4564 9.21304 13.9833 9.19221 10.1924 7.95019L13.7279 11.4857C10.999 15.918 9.1539 18.2613 5.9648 22.1074C9.87497 18.7218 12.2681 16.8417 16.5563 14.3142L20.0919 17.8497C18.8499 14.0588 18.829 10.5857 20.0919 7.95019Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

export default function Rating() {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__inner}>
        <div className={styles.inner__heading}>
          <div className={styles.heading__avatars}>
            <Image
              src={avatarsImage.src}
              alt=""
              width={99}
              height={30}
              unoptimized
              className={styles.avatars__img}
            />
            {/*Короче примерно на этом момент я осознал весь дизайн, делать нормально я это не буду, доедайте */}
          </div>
          <div className={styles.heading__image}>{arrowImage()}</div>
        </div>
        <div className={styles.inner__score}>
          <Score rating={4.95} outOf={5} />
        </div>
        <div className={styles.inner__description}>
          <span className={styles.description__text}>
            У каждого специалиста в нашем каталоге есть рейтинг.
          </span>
        </div>
      </div>
    </div>
  );
}
