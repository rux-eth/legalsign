import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {

    return (

        <div class={styles.navContainer}>
            <div class={styles.navLogo}>
                Logo here
            </div>
            <div class={styles.navRight}>
                Right Side Here
            </div>
        </div>
    );
};