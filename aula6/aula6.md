# Ciclo Formativo PretaLab | ReactJS - Aula 6 - 12/11 🚀

## ✓ Projeto II

### `Projeto da semana`

Vamos iniciar um projetinho react do zero com direito a componetização, uso de props, e uso de listas/keys.
E deverá conter os componentes como descrito abaixo.

O Projetinho será: `"Meus Conteúdos Favoritos"` ou `"Meus Projetos Favoritos"`.

- A Simara fez o dela com base nos projetos preferidos, vem aqui entender melhor e se inspirar: [Site da Si](https://projeto-react2.netlify.app/)

- A Lis fez o dela com base nos conteudos preferidos, vem aqui entender melhor e se inspirar: [Site da Lis](https://projeto-react2-lis.netlify.app)

# Vamos juntas?

## 🚧 Crie seu projeto com o Vite

Não lembra? Calma bença! Segue o comandinho do sucesso ➟ ` npm create vite@latest nome-do-app -- --template react`

~

## 💜 Estrutura do App

Limpe o projeto removendo o conteúdo que vem inserido nele para que possamos inserir o nosso!

```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer message="Feito com ♡ por `seu nome`. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```

~

## 💎 Dados da nossa aplicação

Crie uma pasta chamada `data`, nesta pasta crie os seguintes arquivos:

- `profile-data.js` e crie um objeto com informações que serão inseridas na Bio (nome, apelido, foto, descrição).
- `contents.js` ou `projects.js` e dentro dele popule o array de objetos com as informações (titulo, link para gif q represente, descrição e link para mais detalhes).

~

## 🥷 Componentes do nosso projeto

- Header
  ```
    ≂≂≂≂≂≂≂≂≂≂
      Titulo
    ≃≃≃≃≃≃≃≃≃≃
  ```
- Bio (deve receber os dados do arquivo 'profile-data.js').
- Card (Titulo, um gif que represente, descrição e link para mais informações)
- Cards (Esse componente irá chamar o componente `card` repetindo ele pelo numero de elementos existente na lista).
- Footer

  ```
                            ~~~~~~~~~~
  Feito com ♡ por SEUNOME. E todos os direitos são reservados

  ```

~
# 🥸 Vale relembrar

`❗ Bebam água minha gente <3 :) ❗`
