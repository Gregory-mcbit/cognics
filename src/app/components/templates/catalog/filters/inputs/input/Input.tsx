import React from "react";
import styles from "./Input.module.css";

export interface IInput {
  value: string;
  inputPlaceholder: string;
  placeholder: string;
  handleOnChnage: (val: string) => void;
}

export default function Input({
  value,
  placeholder,
  inputPlaceholder,
  handleOnChnage,
}: IInput) {
  return (
    <div className={styles.input}>
      <div className={styles.input__inner}>
        <div className={styles.inner__placeholder}>
          <span className={styles.placeholder__text}>{placeholder}</span>
        </div>
        <div className={styles.inner__input}>
          <input
            value={value}
            onChange={(e) => handleOnChnage(e.currentTarget.value)}
            placeholder={inputPlaceholder}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}
