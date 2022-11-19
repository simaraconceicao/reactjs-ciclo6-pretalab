// quando a minha tela carregar, eu quero consumir uma API e mostrar os dados na tela
import { useEffect, useState } from "react";
import Axios from "axios";

export const Lista = () => {
  const [pokemons, setPokemons] = useState([]);
  const [listaOculta, setListaOculta] = useState(false);
  const [statusDaLista, setStatusDaLista] = useState(
    "A lista de Pokemons está visível!"
  );
  // e se eu quiser ocutar a lista ao marcar um checkbox? (Praticando useState)
  // e se eu quiser que um subtitulo mostre o status da lista? (Praticando useEffect)

  // Esse useEffect é executado apenas uma vez, ao entrar na apicação.
  useEffect(() => {
    console.log("Componente montado");
    async function pegaDados() {
      const resposta = await Axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(resposta.data.results);
    }
    pegaDados();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    if (listaOculta) {
      setStatusDaLista("A lista de Pokemons está oculta!");
    } else {
      setStatusDaLista("A lista de Pokemons está visível!");
    }

    // listaOculta
    //   ? setStatusDaLista("A lista de Pokemons está oculta!")
    //   : setStatusDaLista("A lista de Pokemons está visível!");
  }, [listaOculta]);

  function ocultarLista() {
    setListaOculta((valor) => !valor);
  }

  return (
    <>
      <h1>Pokemons</h1>
      <input type="checkbox" onChange={ocultarLista} />
      <label>Ocultar Lista</label>
      <br />
      <h2>{statusDaLista}</h2>
      <br />
      {listaOculta
        ? null
        : pokemons.map((pokemon) => {
            return <p key={pokemon.name}>{pokemon.name}</p>;
          })}
    </>
  );
};
