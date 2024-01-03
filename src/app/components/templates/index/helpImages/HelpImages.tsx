import React from "react";
import styles from "./HelpImages.module.css";
import HelpIllustration from "@/app/components/atoms/helpIllustration/HelpIllustration";
import DepressionTypes from "@/app/components/atoms/depressionTypes/DepressionTypes";

export default function HelpImages() {
  return (
    <div className={styles.help_images}>
      <HelpIllustration />
      <DepressionTypes />
    </div>
  );
}
