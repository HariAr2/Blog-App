"use client"
import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";



const WritePage = () => {
  const [open, setOpen] = useState(false);
  const[value,setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16}></Image>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/food.png" alt="" width={16} height={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/film.png" alt="" width={16} height={16}></Image>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritePage;
