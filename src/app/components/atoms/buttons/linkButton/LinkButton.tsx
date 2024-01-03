"use client";

import React from "react";
import styles from "./LinkButton.module.css";
import Image from "next/image";

interface ILinkButton {
  title: string;
  image: any;
  imageWidth?: number;
  imageHeight?: number;
  innerStyle?: React.CSSProperties;
  blockStyle?: React.CSSProperties;
  action?: () => void;
}

export default function LinkButton({
  title,
  image,
  innerStyle,
  action,
  imageWidth,
  imageHeight,
  blockStyle,
}: ILinkButton) {
  const handleOnClick = () => {
    try {
      if (action) action();
      else console.warn(`Function is not defined.`);
    } catch (error) {
      console.warn(`Function was not called successfully. Error: ${error}`);
    }
  };

  return (
    <div
      onClick={() => handleOnClick()}
      style={blockStyle}
      className={styles.link_button}
    >
      <div style={innerStyle} className={styles.link_button__inner}>
        <div className={styles.link_button__title}>
          <span className={styles.title__text}>{title}</span>
        </div>
        <div className={styles.link_button__image}>
          {typeof image === "string" ? (
            <Image
              src={image}
              alt=""
              width={imageWidth}
              height={imageHeight}
              unoptimized
              className={styles.image__img}
            />
          ) : (
            image
          )}
        </div>
      </div>
    </div>
  );
}
