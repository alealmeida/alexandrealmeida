import React, {useRef} from "react";
import { useScrollData } from "scroll-data-hook";
import Link from 'next/link'
import styles from './topbar.module.sass'

export const Topbar = () => {

    const {
        scrolling,
        time,
        speed,
        direction,
        position,
        relativeDistance,
        totalDistance
      } = useScrollData({
        onScrollStart: () => {},
        onScrollEnd: () => {}
      });
    return (
        <nav  className={styles.topbar}>
            <ul className={styles.nav}>
                <li>
                    <Link href="/">
                        <a>Alexandre Almeida</a>
                    </Link>
                </li>
                <li>
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
