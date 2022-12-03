import { useState } from 'react'
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'
import { database } from '../services/firebase'
import { ref, push, set } from 'firebase/database'

import styles from '../styles/pages/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputName(event) {
    setNome(event.target.value)
  }

  function handleInputEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputMessage(event) {
    setMensagem(event.target.value)
  }

  function createMessage(event) {
    event.preventDefault()
   
    console.log('nome: ', nome)
    console.log('email: ', email)
    console.log('mensagem: ', mensagem)

    //dentro do firebase cria uma tabela de mensagens
    const mensagensListRef = ref(database, 'mensagens')

    //dentro da tabela de mensagens crie uma nova mensagem
    const novaMensagemRef = push(mensagensListRef)

    //Dizer o que vai em cada mensagem
    set(novaMensagemRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return(
    <>
      <Header text="Chama no contatinho" image={contatoImg} />
      <div className={styles.formContainer}>
        <form onSubmit={createMessage} className={styles.form}>
          <input onChange={handleInputName} placeholder="Digite seu nome" className={styles.formInput} value={nome} />
          <input onChange={handleInputEmail} placeholder="Digite seu e-mail" className={styles.formInput} value={email} />
          <textarea onChange={handleInputMessage} placeholder="Digite sua mensagem" className={styles.formTextArea} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}