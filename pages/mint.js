import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Mint() {
    const [address, setAddress] = useState('');

    const listOfNFTs = [
        "https://images.pexels.com/photos/10322846/pexels-photo-10322846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3989816/pexels-photo-3989816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/9697399/pexels-photo-9697399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/10479489/pexels-photo-10479489.jpeg?cs=srgb&dl=pexels-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0%D0%BB%D0%B8%D0%BD-10479489.jpg&fm=jpg",
        "https://images.pexels.com/photos/5327975/pexels-photo-5327975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6940628/pexels-photo-6940628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6940578/pexels-photo-6940578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ];

    return (
        <div>
            <h1 className={styles['center-text']}>Mint</h1>
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
                                <button>Mint Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}