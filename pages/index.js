import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const homeHandler = () => {
    router.push('/');
  };

  const mintHandler = () => {
    router.push('/mint');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFTHack 2022 project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['center-container']}>
        <button onClick={homeHandler}>Home</button>
        <button onClick={mintHandler}>Mint</button>
      </div>
    </div>
  )
}
