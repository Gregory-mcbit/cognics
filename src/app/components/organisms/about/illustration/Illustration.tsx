import React from "react";
import styles from "./Illustration.module.css";
import illustrationImage from "@/app/static/png/index/aboutIllustration.png";
import Image from "next/image";

export default function Illustration() {
  return (
    <div className={styles.illustration}>
      <Image
        src={illustrationImage}
        alt=" "
        width={610}
        height={360}
        unoptimized
        className={styles.illustration__img}
      />
    </div>
  );
}
