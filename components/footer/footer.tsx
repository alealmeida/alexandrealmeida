import React from "react";
import Link from 'next/link'
import styles from './footer.module.sass'

export const Footer = () => {
    return (
        <section className={styles.footer}>
            <h4>Vamos nos conectar</h4>
            <p>Entre em contato para oportunidades ou apenas para dizer um Oi.</p>
            <nav className={styles.nav}>
                <ul className={styles.left}>
                    <li>
                        <Link href="https://linkedin.com/in/almeidaale">
                            <a>linkedin</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:ale.142@icloud.com">
                            <a>ale.142@icloud.com</a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.right}>
                    <li>
                        <a target="_blank" href="https://forms.gle/YkFwLJZWwk1H2j1J8" rel="noopener noreferrer">Pesquisa de feedback</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
