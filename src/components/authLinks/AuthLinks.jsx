import React from 'react'
import styles from "./authLinks.module.css"

function AuthLinks() {

    //temporary
    const status = "noauthenticated"
    return (
        <>
            {status === "noauthenticated"
                ? (<a href='/logout'>Login</a>)
                : (<>
                    <a href="/write">Write</a>
                    <span className={styles.link}>Logout</span>
                </>)
            }
        </>
    );
}

export default AuthLinks