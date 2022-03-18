import React, { useState } from "react";
import styles from "./styles.module.scss";
import Sidebar from "../../src/components/Whitepaper/Sidebar";
import ConnectWallet from "../../src/components/Whitepaper/ConnectWallet";
import FirstSteps from "../../src/components/Whitepaper/FirstSteps";
import Farming from "../../src/components/Whitepaper/Farming";
import Staking from "../../src/components/Whitepaper/Staking";
import Marketplace from "../../src/components/Whitepaper/Marketplace";
import FutureFeature from "../../src/components/Whitepaper/FutureFeature";

export default function Index() {
  const [select, useSelect] = useState("Connect Wallet");
  function onchangeSelected(title) {
    return useSelect(title);
  }

  return (
    <>
      <div className={`${styles["container"]} `}>
        <div className={`${styles["top"]}`}>
          <div className={`${styles["sidebar_top"]}`}>
            <span className={`${styles["sidebar_top__title"]}`}>👾 Cryptonite </span>
          </div>
          <div className={`${styles["sidebar_input"]}`}>
            <div className={`${styles["line"]}`}></div>
            <input type="text" className={`${styles["input"]}`} placeholder="Search..." />
          </div>
        </div>
        <div className={`${styles["bottom"]}`}>
          <Sidebar onchangeSelected={onchangeSelected} />
          <div className={`${styles["right"]}`}>
            {select === "Connect Wallet" && <ConnectWallet />}
            {select === "First Steps" && <FirstSteps />}
            {select === "Farming" && <Farming />}
            {select === "Staking" && <Staking />}
            {select === "Marketplace" && <Marketplace />}
            {select === "Future Features" && <FutureFeature />}
          </div>
        </div>
      </div>
    </>
  );
}
