import React from "react";
import styles from "./styles.module.scss";

export default function Index({ useSelect }) {
  return (
    <div className={`${styles["sidebar"]}`}>
      <div className={`${styles["sidebar__list"]}`}>
        <span className={`${styles["sidebar__link--disable"]}`}>Whitepaper</span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Connect Wallet")}
        >
          🦊 Connect Wallet
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("First Steps")}
        >
          🚀 First steps
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Farming")}
        >
          ⛏ Farming
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Staking")}
        >
          🧱 Staking
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Marketplace")}
        >
          🛒 Marketplace
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Future Features")}
        >
          🌠 Future Features
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Cryptonite Game")}
        >
          🎮 Cryptonite Game
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Burning Methods")}
        >
          🔥 Burning Methods
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Roulette")}
        >
          🚥 Roulette
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("Oracle")}
        >
          ⚖ Oracle
        </span>
        <span className={`${styles["sidebar__link--disable"]}`}>Information</span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("First Steps")}
        >
          Oracle
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("First Steps")}
        >
          Oracle
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("First Steps")}
        >
          Oracle
        </span>
        <span
          className={`${styles["sidebar__link"]}`}
          onClick={() => useSelect("First Steps")}
        >
          Oracle
        </span>
      </div>
    </div>
  );
}
