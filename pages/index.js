import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './components/header';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [address, setAddress] = useState('');
  const [covalentData, setCovalentData] = useState([]);

  const getData = async () => {
    const covalent = "https://api.covalenthq.com/v1/1/address/" + address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=" + process.env.NEXT_PUBLIC_COVALENT_API_KEY;
    const covalentRes = await axios.get(covalent);
    setCovalentData(covalentRes.data.data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFTHack 2022 project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>Welcome to our NFT Market Place</h1>
      <h2>{`Top grossing NFT's`}</h2>
      <div className={styles.grid}>
        display top grossing nft's here 
      </div>
      <div>
        <form>
          <input type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button onClick={(e) => {e.preventDefault(); getData();}}>view my data</button>
        </form>
      </div>
      <div>
          {JSON.stringify(covalentData)}
      </div>
    </div>
  )
}
