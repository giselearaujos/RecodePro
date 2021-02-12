import styles from './Header.module.css';

export default function Header() {
    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <a className={styles.logo} href="#">Avengers</a>            
            </div>            
        </nav>
    )
  }