import React from "react";
import styles from "./StartNow.module.css";
import Info from "@/app/components/organisms/startNow/Info/Info";
import Register from "@/app/components/organisms/startNow/register/Register";

export default function StartNow() {
  return (
    <div className={styles.start_now}>
      <div className={styles.start_now__inner}>
        <Info />
        <Register />
      </div>
    </div>
  );
}
