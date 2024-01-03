import React from "react";
import styles from "./Help.module.css";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import { purpleLink40 } from "../../../../../../public/assets/svg/links/Links";

const buttonStyles: React.CSSProperties = {
  padding: "8px 8px 8px 23px",
};

const buttonBlockStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "90px",
  border: "none",
};

export default function HelpHeading() {
  return (
    <div className={styles.help}>
      <div className={styles.help__inner}>
        <div className={styles.inner__register}>
          <div className={styles.help__register}>
            <LinkButton
              title="Найти психолога"
              image={purpleLink40()}
              innerStyle={buttonStyles}
              blockStyle={buttonBlockStyles}
            />
          </div>
        </div>
        <div className={styles.help__tag}>
          <span className={styles.tag__text}>На связи 24/7</span>
        </div>
        <div className={styles.help__title}>
          <span className={styles.title__text}>
            С чем помогают наши психологи?
          </span>
        </div>
      </div>
    </div>
  );
}
