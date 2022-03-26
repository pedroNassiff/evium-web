import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Index() {
  return (
    <div className={`${styles["header"]}`}>
      <div
        className={`${styles["header__container"]} custom_container custom_container--xxxl`}
      >
        <img src="./imagotipo-evium.png" alt="" className={`${styles["header__logo"]}`} />
        <nav className={`${styles["header_navbar"]}`}>
          <ul className={`${styles["header_navbar__list"]}`}>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/"}>
                <a className={`${styles["header_navbar__link"]}`}>Home</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/farm"}>
                <a className={`${styles["header_navbar__link"]}`}>Farm</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/shop"}>
                <a className={`${styles["header_navbar__link"]}`}>Shop</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/marketplace"}>
                <a className={`${styles["header_navbar__link"]}`}>Marketplace</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/roulette"}>
                <a className={`${styles["header_navbar__link"]}`}>Roulette</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/stake"}>
                <a className={`${styles["header_navbar__link"]}`}>Stake</a>
              </Link>
            </li>
            <li className={`${styles["header_navbar__item"]}`}>
              <Link href={"/whitepaper/connectwallet"}>
                <a className={`${styles["header_navbar__link"]}`}>Whitepaper</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={`${styles["header__button"]}`}>Connect metamask</button>
      </div>
    </div>
  );
}
