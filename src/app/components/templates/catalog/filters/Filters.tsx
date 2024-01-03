"use client";

import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import Inputs from "./inputs/Inputs";
import { IInput } from "./inputs/input/Input";
import styles from "./Filters.module.css";

export default function Filters() {
  const [fromPriceVal, setFromPriceVal] = useState("");
  const [toPriceVal, setToPriceVal] = useState("");

  const handleFromPriceChange = (val: string) => {
    setFromPriceVal(val);
  };

  const handleToPriceChange = (val: string) => {
    setToPriceVal(val);
  };

  const inputsData: IInput[] = [
    {
      value: fromPriceVal,
      inputPlaceholder: "0",
      placeholder: "От",
      handleOnChnage: handleFromPriceChange,
    },
    {
      value: toPriceVal,
      inputPlaceholder: "8500",
      placeholder: "До",
      handleOnChnage: handleToPriceChange,
    },
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.filters__dropdowns}>
        <div className={styles.dropdowns__item}>
          <Dropdown title="Специализация" dropdownTitle="Все" />
        </div>
        <div className={styles.dropdowns__item}>
          <Dropdown title="Аудитория" dropdownTitle="Неважно" />
        </div>
        <div className={styles.dropdowns__item}>
          <Dropdown title="Пол" dropdownTitle="Любой" />
        </div>
      </div>
      <div className={styles.filters__dropdowns_second}>
        <div className={styles.dropdowns__item}>
          <Inputs title="Цена, ₽" inputs={inputsData} />
        </div>
        <div className={styles.dropdowns__item}>
          <Dropdown title="Время сессии" dropdownTitle="1 час" />
        </div>
      </div>
    </div>
  );
}
