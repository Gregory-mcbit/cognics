"use client";

import React, { useState } from "react";
import styles from "./Register.module.css";
import Input from "@/app/components/atoms/input/Input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (val: string) => {
    setName(val);
  };
  const handleEmailChange = (val: string) => {
    setEmail(val);
  };
  const handlePasswordChange = (val: string) => {
    setPassword(val);
  };

  const inputs = [
    {
      value: name,
      handleOnChange: handleNameChange,
      placeholder: "ФИО",
    },
    {
      value: email,
      handleOnChange: handleEmailChange,
      placeholder: "Email",
    },
    {
      value: password,
      handleOnChange: handlePasswordChange,
      placeholder: "Пароль",
    },
  ];

  return (
    <div className={styles.register}>
      <div className={styles.register__title}>
        <span className={styles.title__text}>Зарегистрироваться</span>
      </div>
      <div className={styles.register__description}>
        <span className={styles.description__text}>
          Пройдите регистрацию и найдите психолога{" "}
        </span>
      </div>
      <div className={styles.register__inputs}>
        {inputs.map((item, index) => (
          <Input key={`input-${index}`} {...item} />
        ))}
      </div>
      <div className={styles.register__create_account}>
        <span className={styles.create_account__text}>Создать аккаунт</span>
      </div>
      <div className={styles.register_sign_in}>
        <span className={styles.sign_in__text}>или войдите в существующий</span>
      </div>
    </div>
  );
}
