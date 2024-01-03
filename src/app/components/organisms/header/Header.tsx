"use client";

import React from "react";
import styles from "./Header.module.css";
import Logo from "../../atoms/logo/Logo";
import { INavLink } from "@/app/models/interfaces/Header";
import NavLink from "../../atoms/header/navLink/NavLink";
import LinkButton from "../../atoms/buttons/linkButton/LinkButton";
import { purpleLinkSvg } from "../../../../../public/assets/svg/links/Links";
import { useRouter } from "next/navigation";
import { GoToUrl } from "@/app/utils/GoToUrl";
import { thinStarSvg } from "../../../../../public/assets/svg/stars/Stars";

const navigationList: INavLink[] = [
  {
    text: "Для психологов",
    url: "/work",
  },
  {
    text: "о нас",
    url: "/about",
  },
  {
    text: "Наш блог",
    url: "/blog",
  },
  {
    text: "каталог",
    url: "/catalog",
  },
];

const signInButtonStyles: React.CSSProperties = {
  padding: "4px 11px",
};

export default function Header() {
  const router = useRouter();
  const signInAction = () => GoToUrl(router, "auth");

  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.inner__logo}>
          <Logo isRedirectToIndex />
        </div>
        <div className={styles.inner__navigation_list}>
          {navigationList.map((item, index) => {
            if (index !== 0 && index !== navigationList.length)
              return (
                <div className={styles.navigation_list__item}>
                  <div className={styles.item__image}>{thinStarSvg()}</div>
                  <NavLink key={`nav-link-${index}`} {...item} />
                </div>
              );

            return <NavLink key={`nav-link-${index}`} {...item} />;
          })}
        </div>
        <div className={styles.inner__sign_in}>
          <LinkButton
            innerStyle={signInButtonStyles}
            title="Войти"
            image={purpleLinkSvg()}
            action={signInAction}
          />
        </div>
      </div>
    </div>
  );
}
