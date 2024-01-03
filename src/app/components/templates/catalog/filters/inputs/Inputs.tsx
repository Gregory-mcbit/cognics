import React from "react";
import styles from "./Inputs.module.css";
import Input, { IInput } from "./input/Input";

export default function Inputs({
  inputs,
  title,
}: {
  inputs: IInput[];
  title: string;
}) {
  return (
    <div className={styles.inputs}>
      <div className={styles.inputs__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
      <div className={styles.inputs__list}>
        {inputs.map((item, index) => (
          <Input key={`input-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
