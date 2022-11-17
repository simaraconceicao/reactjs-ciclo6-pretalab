import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [titulo, setTitulo] = useState("Um contador muito legal!");

  const adicionarUm = () => {
    setContador((contador) => contador + 1);
  };

  const subtrairUm = () => {
    setContador((contador) => contador - 1);
  };

  const traduzirTitulo = () => {
    // if (titulo === "A very cool counter!") {
    //   setTitulo("Um contador muito legal!");
    // } else {
    //   setTitulo("A very cool counter!");
    // }

    // if (titulo === "Um contador muito legal!") {
    //   setTitulo("A very cool counter!");
    // } else {
    //   setTitulo("Um contador muito legal!");
    // }

    const pt = "Um contador muito legal!";
    const en = "A very cool counter!";
    titulo === en ? setTitulo(pt) : setTitulo(en);
  };
  // a cool counter!
  return (
    <div className="App">
      <h1>{titulo}</h1>
      <button onClick={traduzirTitulo}>Traduzir</button>
      <br />
      <br />
      <button onClick={subtrairUm}>-</button>
      <h1> {contador} </h1>
      <button onClick={adicionarUm}>+</button>
    </div>
  );
}

export default App;
