import React from "react";
import styles from "./Input.module.css";

export interface IInput {
  value: string;
  handleOnChange: (e: string) => void;
  placeholder: string;
}

export default function Input({ value, handleOnChange, placeholder }: IInput) {
  return (
    <input
      value={value}
      onChange={(e) => handleOnChange(e.currentTarget.value)}
      placeholder={placeholder || "Введите текст"}
      className={styles.input}
    />
  );
}
