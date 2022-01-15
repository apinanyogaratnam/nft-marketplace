import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { NFTStorage, File, Blob } from "nft.storage";
import axios from 'axios';
import Header from './components/header';

export default function Mint() {
    const [address, setAddress] = useState('');
    const [mintedNFTs, setMintedNFTs] = useState([]);

    const listOfNFTs = [
        "https://images.pexels.com/photos/10322846/pexels-photo-10322846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3989816/pexels-photo-3989816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/9697399/pexels-photo-9697399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/10479489/pexels-photo-10479489.jpeg?cs=srgb&dl=pexels-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0%D0%BB%D0%B8%D0%BD-10479489.jpg&fm=jpg",
        "https://images.pexels.com/photos/5327975/pexels-photo-5327975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6940628/pexels-photo-6940628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6940578/pexels-photo-6940578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/8536208/pexels-photo-8536208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ];

    const mintNow = async (index) => {
        const nftPortApiKey = process.env.NEXT_PUBLIC_NFT_PORT_API_KEY;
        const urlToMint = "https://api.nftport.xyz/v0/mints/easy/urls";

        const body = {
            "chain": "rinkeby",
            "name": "ArtWork", // update to user's preferred nft name
            "description": "A piece of artwork from a collection from pexels.com", // update to user's preferred nft description
            "file_url": listOfNFTs[index],
            "mint_to_address": address // update to user's preferred address
        };

        const auth = {
            headers: {
              Authorization: nftPortApiKey
            }
        };

        const res = await axios.post(urlToMint, body, auth);
        console.log(res.data.transaction_external_url);
        setMintedNFTs([...mintedNFTs, res.data.transaction_external_url]);

        // filecoin nft storage implementation
        const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY });
        const cid = await client.storeBlob(new Blob([{
          chain: res.data.chain,
          contract_address: res.data.contract_address,
          transaction_hash: res.data.transaction_hash,
          description: res.data.description,
          address: res.data.mint_to_address
        }]));
    };

    return (
        <div>
            <Header />
            <h1 className={styles['center-text']}>Mint</h1>
            <div>
                <h3>{`your nft's`}</h3>
                <div>
                    {mintedNFTs.map((nft, index) => {<a href={nft}>NFT #{index}</a>})}
                </div>
            </div>
            <div className={styles['center-container']}>
                <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <br />
                <br />
            </div>
            <div className={styles['center-container']}>
                {
                    listOfNFTs.map((nft, index) => {
                        return (
                            <div key={index}>
                                <img src={nft} alt="" height={200} width={200} />
                                <button onClick={(e) => {e.preventDefault(); mintNow(index);}}>Mint Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}