"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

function AuthLinks() {
  const [open, setopen] = useState(false);
  //temporary
  const status = "noauthenticated";

  return (
    <>
      {status === "authenticated" ? (
        <a href="/login">Login</a>
      ) : (
        <>
          <a href="/write">Write</a>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setopen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
