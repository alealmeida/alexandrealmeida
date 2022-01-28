import React from "react";
import Link from 'next/link'
import styles from './topbar.module.sass'

export const Topbar = () => {
   
    return (
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link href="/">
                        <a>Ale Almeida</a>
                    </Link>
                </li>
                {/* <li>
                    ...
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre mim</a>
                    </Link>
                </li> */}
                
                </ul>
        </nav>
    )
}
