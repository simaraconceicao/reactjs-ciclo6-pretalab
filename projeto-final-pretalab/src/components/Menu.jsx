import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'

export function Menu() {
  return(
    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">Inicio</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/portfolio">Portfolio</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </ul>
  )
}