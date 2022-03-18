import React from "react";
import styles from "./styles.module.scss";

export default function Index({ onchangeSelected }) {
  // function onchangeSelected(title) {
  //   useSelect(title);
  // }
  return (
    <div className={`${styles["sidebar"]}`}>
      <div className={`${styles["sidebar__list"]}`}>
        <span className={`${styles["sidebar__link--disable"]}`}>Whitepaper</span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={onchangeSelected("Connect Wallet")}
        >
          🦊 Connect Wallet
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={onchangeSelected("First Steps")}
        >
          🚀 First steps
        </span>
        <span className={`${styles["sidebar__link"]}`}>⛏ Farming</span>
        <span className={`${styles["sidebar__link"]}`}>🧱 Staking</span>
        <span className={`${styles["sidebar__link"]}`}>🛒 Marketplace</span>
        <span className={`${styles["sidebar__link"]}`}>🌠 Future Features</span>
        <span className={`${styles["sidebar__link"]}`}>🎮 Cryptonite Game</span>
        <span className={`${styles["sidebar__link"]}`}>🔥 Burning Methods</span>
        <span className={`${styles["sidebar__link"]}`}>🚥 Roulette</span>
        <span className={`${styles["sidebar__link"]}`}>⚖ Oracle</span>
        <span className={`${styles["sidebar__link--disable"]}`}>Information</span>
        <span className={`${styles["sidebar__link"]}`}>Oracle</span>
        <span className={`${styles["sidebar__link"]}`}>Oracle</span>
        <span className={`${styles["sidebar__link"]}`}>Oracle</span>
        <span className={`${styles["sidebar__link"]}`}>Oracle</span>
      </div>
    </div>
  );
}
