import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.item}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>-5 days ago </span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>-5 days ago </span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>-5 days ago </span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>-5 days ago </span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Menu;
