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