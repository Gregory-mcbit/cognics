import React from "react";
import styles from "./Home.module.css";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Chats from "./chats/Chats";

export default function HomeMain() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Main />
      <Chats />
    </div>
  );
}
