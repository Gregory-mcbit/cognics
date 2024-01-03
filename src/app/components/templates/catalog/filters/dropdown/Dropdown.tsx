import React from "react";
import styles from "./Dropdown.module.css";

const arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
    >
      <path
        d="M1 1L10.2929 10.2929C10.6834 10.6834 11.3166 10.6834 11.7071 10.2929L21 1"
        stroke="#BBBCC1"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export interface IDropdownItems {}

export interface IDropdown {
  title: string;
  dropdownTitle: string;
  items?: IDropdownItems;
}

export default function Dropdown({ title, dropdownTitle, items }: IDropdown) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__title}>
        <span className={styles.title__text}>{title}</span>
      </div>
      <div className={styles.dropdown__body}>
        <div className={styles.body__inner}>
          <div className={styles.body__title}>
            <span className={styles.title__text}>{dropdownTitle}</span>
          </div>
          <div className={styles.body__arrow}>{arrow()}</div>
        </div>
      </div>
    </div>
  );
}
