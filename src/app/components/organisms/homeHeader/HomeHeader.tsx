"use client";

import React from "react";
import styles from "./HomeHeader.module.css";
import Logo from "../../atoms/logo/Logo";
import { INavLink } from "@/app/models/interfaces/Header";
import NavLink from "../../atoms/header/navLink/NavLink";
import { thinStarSvg } from "../../../../../public/assets/svg/stars/Stars";
import headerAvatar from "@/app/static/png/index/headerAvatar.png";

const navigationList: INavLink[] = [
  {
    text: "на главную",
    url: "/blog",
  },
  {
    text: "каталог психологов",
    url: "/catalog",
  },
];

export default function HomeHeader() {
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
        <div className={styles.inner__profile}>
          <div className={styles.profile__title}>
            <span className={styles.title__text}>Иван Бруклинский</span>
          </div>
          <div className={styles.profile__avatar}>
            <img src={headerAvatar.src} />
          </div>
        </div>
      </div>
    </div>
  );
}
