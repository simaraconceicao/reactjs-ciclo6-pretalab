import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <Header text="Meu site pessoal" image={homeImg} />
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        <Alien size={150} color="#686AAC" weight="thin" />
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
      </div>
      <div className={styles.cardContainer}>
        <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Código</h2>
        <p className={styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
      </div>
      <div className={styles.cardContainer}>
        <AddressBook size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Contatinho</h2>
        <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
      </div>
     </div>
    </>
  )
}