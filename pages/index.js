import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFTHack 2022 project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['center-container']}>
        <button>Home</button>
        <button>Mint</button>
      </div>
    </div>
  )
}
