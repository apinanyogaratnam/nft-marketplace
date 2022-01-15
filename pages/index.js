import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFTHack 2022 project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>Welcome to our NFT Market Place</h1>
      <h2>Top grossing NFT's</h2>
      <div className={styles.grid}>
        hi  
      </div>
    </div>
  )
}
