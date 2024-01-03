import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";

interface ILogo {
  isRedirectToIndex?: boolean;
}

export default function Logo({ isRedirectToIndex }: ILogo) {
  return (
    <div className={styles.logo}>
      {isRedirectToIndex ? (
        <Link href="/" className={styles.logo__text}>
          COGNICS
        </Link>
      ) : (
        <span className={styles.logo__text}>COGNICS</span>
      )}
    </div>
  );
}
