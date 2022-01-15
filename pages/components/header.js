import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const homeHandler = () => {
      router.push('/');
    };
  
    const mintHandler = () => {
      router.push('/mint');
    };

    return (
        <div className={styles['center-container']}>
            <button onClick={homeHandler}>Home</button>
            <button onClick={mintHandler}>Mint</button>
        </div>
    );
}
