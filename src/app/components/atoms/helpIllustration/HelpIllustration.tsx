import React from "react";
import styles from "./HelpIllustration.module.css";
import Image from "next/image";
import helIllustrationImage from "@/app/static/png/index/help_illustration.png";

export default function HelpIllustration() {
  return (
    <div className={styles.help_illustration}>
      <Image
        src={helIllustrationImage.src}
        alt=""
        width={328.89}
        height={291.46}
        unoptimized
        className={styles.illustration__img}
      />
    </div>
  );
}
