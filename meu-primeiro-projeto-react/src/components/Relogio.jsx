function Relogio() {
  const horarioLocal = new Date().toLocaleTimeString()

  return (
    <h2>{horarioLocal}</h2>
  )
}

export default Relogio
