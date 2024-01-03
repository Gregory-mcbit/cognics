import React from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { INavLink } from "@/app/models/interfaces/Header";

export default function NavLink({ text, url }: INavLink) {
  return (
    <div className={styles.nav_link}>
      <Link href={url} className={styles.nav_link__text}>
        {text}
      </Link>
    </div>
  );
}
