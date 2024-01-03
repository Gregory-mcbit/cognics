import React from "react";
import styles from "./ProfileHeader.module.css";
import Back from "./back/Back";
import { purpleLinkSvg } from "../../../../../public/assets/svg/links/Links";
import LinkButton from "../../atoms/buttons/linkButton/LinkButton";

const buttonStyles: React.CSSProperties = {
  padding: "4px 6px 4px 11px",
};

const buttonBlockStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "90px",
};

export default function ProfileHeader() {
  return (
    <div className={styles.profile_header}>
      <div className={styles.profile_header__inner}>
        <div className={styles.inner__back}>
          <Back />
        </div>
        <div className={styles.inner__logo}>
          <span className={styles.logo__text}>COGNICS</span>
        </div>
        <div className={styles.inner__sign_in}>
          <LinkButton
            title="Войти"
            image={purpleLinkSvg()}
            innerStyle={buttonStyles}
            blockStyle={buttonBlockStyles}
          />
        </div>
      </div>
    </div>
  );
}
