import React from "react";
import Link from 'next/link'
import styles from './footer.module.sass'

export const Footer = () => {
   
    return (
        <nav className={styles.footer}>
            <h3>Dê um oi.</h3>
            <h4>Vamos Falar</h4>
            <ul className={styles.nav}>
                <li>
                    <Link href="https://linkedin.com/in/almeidaale">
                        <a>linkedin</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/almeidaale">
                        <a>linkedin</a>
                    </Link>
                </li>
                </ul>
        </nav>
    )
}
