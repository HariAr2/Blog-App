import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
          <h1 className={styles.logoText}>Lama Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sint eaque
          dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam
          totam libero ipsa aliquam obcaecati, in facere molestiae architecto
          asperiores?...
        </p>
        <div className={styles.icons}>
            <Image src="/facebook.png" alt="facebook" width={18} height={18}/>
            <Image src="/instagram.png" alt="instagram" width={18} height={18}/>
            <Image src="/youtube.png" alt="youtube" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link  href="/">HomePage</Link>
            <Link  href="/">Blog</Link>
            <Link  href="/">About</Link>
            <Link  href="/">Contact Us</Link>
        </div>
        <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link  href="/">Style</Link>
            <Link  href="/">Fashion</Link>
            <Link  href="/">Coding</Link>
            <Link  href="/">Travel</Link>
        </div>
        <div className={styles.list}>
            <span className={styles.listTitle}>Socials</span>
            <Link  href="/">Instagram</Link>
            <Link  href="/">FaceBook</Link>
            <Link  href="/">YouTube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
