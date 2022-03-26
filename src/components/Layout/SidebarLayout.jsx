import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "../Whitepaper/Sidebar";
import { Icon } from "@iconify/react";

export default function SidebarLayout({ children }) {
  return (
    <div>
      <div className={`${styles["container"]} `}>
        <div className={`${styles["top"]}`}>
          <div className={`${styles["sidebar_top"]}`}>
            <span className={`${styles["sidebar_top__title"]}`}>👾 Evium </span>
          </div>
          <div className={`${styles["sidebar_input"]}`}>
            <div className={`${styles["line"]}`}></div>
            <div className={`${styles["sidebar_search"]}`}>
              <label htmlFor="search">
                <Icon icon="carbon:search" />
              </label>
              <input
                id="search"
                type="text"
                className={`${styles["input"]}`}
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className={`${styles["bottom"]}`}>
          <Sidebar />
          <div className={`${styles["right"]}`}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
