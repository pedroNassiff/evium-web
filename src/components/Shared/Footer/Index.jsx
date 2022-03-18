import React from "react";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";

export default function Index() {
  return (
    <div className={`${styles["footer"]} `}>
      <div
        className={`${styles["footer__container"]} custom_container custom_container--xxxl`}
      >
        <img src="/logo-large.svg" alt="" className={`${styles["footer__images"]}`} />
        <div className={`${styles["footer__links"]}`}>
          <div className={`${styles["footer__background"]}`}>
            <Icon icon="bxl:telegram" className={`${styles["icon"]}`} />
          </div>
          <div className={`${styles["footer__background"]}`}>
            <Icon icon="akar-icons:discord-fill" className={`${styles["icon"]}`} />
          </div>
          <div className={`${styles["footer__background"]}`}>
            <Icon icon="akar-icons:twitter-fill" className={`${styles["icon"]}`} />
          </div>
          <div className={`${styles["footer__background"]}`}>
            <Icon icon="ant-design:instagram-filled" className={`${styles["icon"]}`} />
          </div>
          <div className={`${styles["footer__background"]}`}>
            <Icon icon="cib:tiktok" className={`${styles["icon"]}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
