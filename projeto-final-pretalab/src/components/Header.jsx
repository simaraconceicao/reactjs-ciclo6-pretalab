import styles from '../styles/components/header.module.css'

export function Header(props) {
  return (
   <div className={styles.headerContainer}>
    <h1 className={styles.headerTitle}>{props.text}</h1>
    <img className={styles.headerImage} src={props.image} />
   </div>
  )
}

