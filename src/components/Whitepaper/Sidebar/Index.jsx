import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function Index() {
  return (
    <div className={`${styles["sidebar"]}`}>
      <div className={`${styles["sidebar__list"]}`}>
        <span className={`${styles["sidebar__link--disable"]}`}>Whitepaper</span>
        <Link href={`/whitepaper/connectwallet`}>
          <a className={`${styles["sidebar__link"]}`}>🦊 Connect Wallet</a>
        </Link>
        <Link href={"/whitepaper/firststeps"}>
          <a className={`${styles["sidebar__link"]}`}>🚀 First steps</a>
        </Link>
        <Link href={"/whitepaper/farming"}>
          <a className={`${styles["sidebar__link"]}`}>⛏ Farming</a>
        </Link>
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
