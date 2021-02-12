import styles from './Main.module.css';

export default function Main() {
    return (
      <div className={styles.container}>
          <a className={styles.person1} href="#">HULK</a>
          <a className={styles.person2} href="#">HOMEM DE FERRO</a> 
          <a className={styles.person3} href="#">CAPITÃO AMERICA</a> 
          <a className={styles.person4} href="#">THOR</a> 
          <a className={styles.person5} href="#">HOMEM ARANHA</a> 
      </div> 
    )
  }