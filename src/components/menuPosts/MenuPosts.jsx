import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link href="/" className={styles.item}>
      {withImage && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>
          Travel
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John doe</span>
          <span className={styles.date}>-5 days ago </span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>
          Culture
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John doe</span>
          <span className={styles.date}>-5 days ago </span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>Food</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John doe</span>
          <span className={styles.date}>-5 days ago </span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>
          Fashion
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John doe</span>
          <span className={styles.date}>-5 days ago </span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuPosts