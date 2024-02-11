import React from 'react'
import styles from "./navbar.module.css"
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

function Navbar(){
    return(
        <div className={styles.container}>
            <div className={styles.social}>
                <img src="/facebook.png" alt="Facebook" width={24} height={24}/>
                <img src="/instagram.png" alt="Instagram" width={24} height={24}/>
                <img src="/youtube.png" alt="Youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}>ENTITIES</div>
            <div className={styles.links}>
                <ThemeToggle></ThemeToggle>
                <a href="/">Homepage</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
                <AuthLinks></AuthLinks>
            </div>
        </div>
    );
}

export default Navbar