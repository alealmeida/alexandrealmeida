import React from "react";
import Link from 'next/link'
import styles from './navbar.module.sass'

export const Navbar = ({job}, key) => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li key={key.i}>
                    <Link key={key.i} href="/jobs/[slug]" as={`/jobs/${job.attributes.slug}`}>
                        <a>{job.attributes.title}</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
