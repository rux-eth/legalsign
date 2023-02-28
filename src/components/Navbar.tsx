import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'


export default function Navbar() {

    return (

        <div className={styles.navContainer}>
            <div className={styles.navLogo}>
                <Image className={styles.navImage} src="/handandpen.png" width={50} height={50}/>
                LegalSign
            </div>
            <div className={styles.navRight}>
                <button className={styles.navButton}>
                    Sign In
                </button>
            </div>
        </div>
    );
};