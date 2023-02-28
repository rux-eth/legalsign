import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.homeTitle}>
        Welcome to LegalSign
        <div className={styles.homeSubtitle}>
          decentralized hosting, signatures, and verifications for legally-binding documents
        </div>
      </div>
      <div className={styles.homeNavigation}>
        <div className={styles.homeCard}>
          <div className={styles.homeCardImage}>
            image here
          </div>
          <div className={styles.homeCardText}>
            View Contracts
          </div>
        </div>
        <div className={styles.homeCard}>
          <div className={styles.homeCardImage}>
            image here
          </div>
          <div className={styles.homeCardText}>
            Create Contracts
          </div>
        </div>
        <div className={styles.homeCard}>
          <div className={styles.homeCardImage}>
            image here
          </div>
          <div className={styles.homeCardText}>
            Documentation
          </div>
        </div>
      </div>
    </>
  )
}
