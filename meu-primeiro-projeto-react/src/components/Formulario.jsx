function Formulario() {
  function ligaClick() {
    console.log('cliquei no botao')
  }

  function pegaInput(event) {
    console.log(event)
  }

  return (
    <div>
      <input onChange={pegaInput} placeholder="Digite seu nome" />
      <button onClick={ligaClick}>Enviar</button>
    </div> 
  )
}

export default Formulario