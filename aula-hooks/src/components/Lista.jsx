// quando a minha tela carregar, eu quero consumir uma API e mostrar os dados na tela
import { useEffect, useState } from 'react'
import Axios from 'axios'

export const Lista = () => {
  const [pokemons, setPokemons] = useState([]) //esse passo

  useEffect(() => {
    async function pegaDados() {
      const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemons(resposta.data.results) //esse passo
    }
    pegaDados()
  }, [])

  return(
    <>
     {pokemons.map(pokemon => { //esse passo
      return(
        <p key={pokemon.name}>{pokemon.name}</p>
      )
     })}
    </>
  )
}