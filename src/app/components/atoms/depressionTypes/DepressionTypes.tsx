import React from "react";
import styles from "./DepressionTypes.module.css";
import Image from "next/image";
import depressionTypes from "@/app/static/png/index/depressionTypes.png";

export default function DepressionTypes() {
  return (
    <div className={styles.help_illustration}>
      <Image
        src={depressionTypes.src}
        alt=""
        width={741}
        height={264}
        unoptimized
        className={styles.illustration__img}
      />
    </div>
  );
}
