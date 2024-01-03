import React from "react";
import styles from "./Illustration.module.css";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import { purpleLink40 } from "../../../../../../public/assets/svg/links/Links";
import illustrationBackground from "@/app/static/png/index/illustrationBackground.png";

const buttonStyles: React.CSSProperties = {
  padding: "8px 8px 8px 20px",
};

const buttonBlockStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "90px",
  border: "none",
};

const illustrationStyles: React.CSSProperties = {
  backgroundImage: `url(${illustrationBackground.src})`,
};

export default function Illustration() {
  return (
    <div style={illustrationStyles} className={styles.illustration}>
      <div className={styles.illustration__button}>
        <LinkButton
          title="Найти психолога"
          image={purpleLink40()}
          innerStyle={buttonStyles}
          blockStyle={buttonBlockStyles}
        />
      </div>
    </div>
  );
}
