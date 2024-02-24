import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts withImage={false}/>
      <h2 className={styles.subtitle}>Discover By Categories</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories></MenuCategories>

      <h2 className={styles.subtitle}>Chosen By Editors</h2>
      <h1 className={styles.title}>Editor's Choice</h1>
     <MenuPosts withImage = {true}/>
    </div>
  );
}

export default Menu;
