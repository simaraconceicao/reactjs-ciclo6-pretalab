# Ciclo Formativo PretaLab | ReactJS  - Aula 3 - 05/11 🚀 

✓  Apresentação da Professora Liz

✓  Projeto I

### `Projeto da semana` 
Vamos iniciar um projetinho react do zero com direito a componetização e uso de props.

O Projetinho será: "Meus conteúdos favoritos"
E deverá conter os componentes como descrito abaixo.

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu site](https://projeto-react1.netlify.app/) 

> O que deve ser feito:
1) Crie um projeto react com vite
2) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu nas últimas aulas. 
3) Arraseee! E qualquer coisa, me chama!

# Componentes maiores
>> componentes que usam os componentes menores recebendos os conteúdos por props

Bio 
Cards

# Componentes menores

>> somente o esqueleto, os conteúdos serão inclusos por props

Title 
Subtitle
Text
Image
Header
Footer

# Estrutura do App

>> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```
