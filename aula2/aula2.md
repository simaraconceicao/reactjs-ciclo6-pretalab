# Ciclo Formativo PretaLab | ReactJS  - Aula 2 - 03/11 🚀 

✓  Componentes e JSX

✓  Props e Children

------

## `Componentes e JSX`

Em react tudo é componente!
Pequenas partes onde podemos encapsular/guardar códigos e reutilizar sempre que necessário.

Se liga aqui no Instagram. Deve existir lá no código deles um componente chamado perfil. Olha como todos são exatamente iguais. 
tem o nome, a imagem, a quantidade de seguidores, seguindo, publicações, a Bio. Só o conteúdo muda de uma usuária pra outra, certo?

Se alguma funcionalidade muda, então fica muito mais fácil fazer uma manutenção, você sabe exatamente onde o código vai estar. Basta ir no componente e mudar onde a lógica está encapsulada.

Vamos aprender a criar um componente react.

Existem duas formas de criar componentes: classes e funcões.

Aqui, vamos focar somente em funções, pois em 2018 o time que criou o react introduziu uma forma de 
resolver problemas onde antes somente componentes com classes poderiam fazer. 

Eu chamo isso de React moderninho! haha
Você vai curtir, mas na próxima aula!

Um componente é justamente uma função que retorna um HTML. e quando temos javascript misturado com html chamamos de jsx. 

Vamos à prática:
Crio um arquivo com extensão jsx ou js iniciando o nome com letra maiuscula.

Dentro do arquivo crio e exporto uma função. Que poderei importar e usar em qualquer outro componente no meu projeto.

```
function SayHello() {
  return(
    <h1>Hello</h1>
  )
}

export default SayHello
```

```
function Title() {
  return(
    <h1>Eu sou um título lindão</h1>
  )
}

export default Title
```
<br>
<br>

## `Props e Children`

Lembra do componente de perfil que a gente tá supondo que o instagram deve ter?
Como será que eles fazem pra mudar os conteúdos sempre que identificam que estamos mudando de perfil ao acessar?

Uma das soluções para fazer isso seria usando as props, ou propriedades.
Vamos à prática.
Temos o componente Title que para cada página esse título irá mudar. A gente não precisa criar um h1 toda vez e criar todo estilo novamente. Vamos encapsular em um componente e permitir que por props ele receba conteúdos diferentes para o mesmo componente.

```
function Title(props) {
  return(
    <h1>{props.text}</h1>
  )
}

export default Title
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Title"

function App() {
  return(
    <div>
      <Title text="Home"/>
    </div>
  )
}
```

Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```
function Name(props) {
  return(
    <p>{props.children}</p>
  )
}

export default Name
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Name"

function App() {
  return(
    <div>
      <Name>Simara Conceição</Name>
    </div>
  )
}
```
     
<br>
<br>