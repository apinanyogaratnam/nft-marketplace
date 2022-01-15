import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Mint() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');


    return (
        <div>
            <h1 className={styles['center-text']}>Mint</h1>
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        />
                </form>
            </div>
        </div>
    );
}