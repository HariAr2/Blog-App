import React from "react";
import styles from "./menu.module.css";

function Menu() {
  return <div className={styles.container}>
    <h2>{"What's Hot"}</h2>
    <h1>Most Popular</h1>
    <div className={styles.item}></div>
  </div>;
}

export default Menu;
