import React from "react";
import styles from "./Footer.module.css";
import Link from "./link/Link";

const links = [
  {
    title: "Почта",
    description: "Info@cognics.ru",
  },
  {
    title: "Телеграм",
    description: "@cognics",
  },
  {
    title: "Вконтакте",
    description: "@cognics",
  },
  {
    title: "Телефон",
    description: "+7 (495) 120-62-22  ",
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.inner__heading}>
          <div className={styles.heading__logo}>
            <span className={styles.logo__text}>COGNICS</span>
          </div>
          <div className={styles.heading__links}>
            {links.map((item, index) => (
              <Link key={`link-${index}`} {...item} />
            ))}
          </div>
        </div>
        <div className={styles.inner__watermark}>
          <div className={styles.watermark__what_for}>
            <span className={styles.what_for__text}>
              Сайт для психологов и их клиентов
            </span>
          </div>
          <div className={styles.watermark__rights}>
            <span className={styles.rights__text}>
              © Все права защищены Cognics 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
