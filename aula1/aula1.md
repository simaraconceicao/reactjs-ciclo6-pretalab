# Ciclo Formativo PretaLab | ReactJS  - Aula 1 - 01/11 🚀 

✓	 Apresentação da professora 

✓  Dinâmica da nuvem de palavras

✓  Apresentação do módulo 

✓  O que é e quem usa react?

✓  Preparando o ambiente e "Olá, mundo!"

------


## `Prazer, Simara!`

<img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

- Fiz migração de carreira após os 30 anos e vindo de uma área diferente
- Desenvolvedora de software na Thoughtworks 
- Criadora do podcast e canal quero ser dev 
- Professora de programação para pessoas iniciantes em instituições que ajudam a reduzir o gap de gênero e de raça no mercado de tecnologia(Reprograma, PretaLab, Movimento Black Money e outras)

### Vamos nos conectar!

- [youtube](https://www.youtube.com/queroserdev)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
<br>
<br>

## `Como estamos chegando nesse início de módulo?`

https://www.menti.com/aly7opk7maa5

Vamos fazer nossa nuvem de palavras expressando o que esperamos do módulo ReactJS e como estamos chegando.

<br>
<br>

## `Apresentação do módulo`

Após esse módulo você estará preparada com a `base conceitual` para realização de projetos utilizando ReactJS.

Os objetivos específicos do módulo são:

-  Facilitar o entendimento dos pilares do ReactJS (componentes, jsx e props)
- Te preparar para criar aplicações em React do zero
- Facilitar o entendimento do conceito de estado, eventos, listas e introdução ao React Hooks.
- Facilitar o entendimento de rotas em aplicações ReactJs

Vamos ter conteúdos teóricos e práticos conforme roadmap: https://miro.com/app/board/uXjVOfD6Q_0=/?invite_link_id=954992108760

<br>
<br>

## `O que é e quem usa ReactJS?`

Já imaginou se você pudesse aprender a programar com a tecnologia que o Facebook, Instagram, WhatsApp, Twitter, Netflix, Airbnb, Notion, Trello, Tiktok e muitas outras gigantes usam? O que mudaria de possibilidades e oportunidades para sua carreira? Já parou pra refletir sobre isso?

Pois bem, react é uma biblioteca JavaScript usada para criar interfaces para pessoas usuárias.

Já quero abrir um parenteses aqui pra explicar que bibliotecas são conjuntos de funcionalidades criadas por outras pessoas desenvolvedoras que passaram por grandes problemas, criaram soluções e resolveram deixar a solução disponível em pacotes para que outras pessoas possam usar. Boazinhas, né? Eu amooo!rs

E que interfaces de usuários são aquelas telas lindas e cheias de funções que as pessoas usuárias podem interagir. No Instagram por exemplo: a tela de login, o feed onde os posts aparecem, o explorar, os stories, cada pequeno botão de curtir, compartilhar, comentar enfim.

Sim, react e á uma das tecnologias que essas empresas que eu falei e muitas outras do Brasil e do mundo usam. Eu mesma trabalho com essa tecnologia dentro da Thoughtworks. :)

A grande vantagem é que trabalhar com React torna a vida da pessoa desenvolvedora mais fácil, pois a gente consegue criar soluções complexas de uma maneira mais simples e em menos tempo.

Além disso tudo, é importante saber também que com React é possível criar SPA. Um acrônimo para Single Page Application que é uma única página web com super poderes para lidar com diferentes dados a partir das interações das pessoas usuárias.

Na prática, quando alguém clica num botão para abrir uma página nova, o que acontece por debaixo dos panos é a atualização de uma pequena parte de nossa única tela, em vez de atualizar a página inteira para mostrar o esperado.

Eu sei que ainda tá muito abstrato pra visualizar, mas daqui a pouquinho vai fazer mais sentido. Confia em mim e vamos que vamos!

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>
<br>

## `Preparando o ambiente`

Criando e entendendo meu primeiro projeto reactjs, render, estrutura de pastas, apagando arquivos padrão)

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e também o gerenciador de pacotes npm.

Como saber se tenho o node instalado? Abra um terminal e digite o comando abaixo:

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seu retorno não for do modo acima, é porque você ainda não tem, acesse o link abaixo para instalar.

Node: https://nodejs.org/en/

Depois de instalar, rode o comando novamente e tenha certeza que instalou direitinho.

<br>
<br>

## `Olá, Mundo!`

### Criando seu primeiro projeto React com vite 

O que é e como usar vite:

`- Acesse a documentação oficial`: [Vite](https://vitejs.dev/guide/)    

`- Acesse um fio que fiz no twitter`: [Twitter da profa](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)  

`- Acesse um reels que fiz no instagram`: [Insta da profa](https://www.instagram.com/reel/CeBTbEoDUTM/)  

`- Siga o passo a passo aqui embaixo`
1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar e usar? Vamos fazer isso, no terminal rode o comando abaixo. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.
      
``npm create vite@latest nome-do-app -- --template react``

Terminou e deu tudo certo, quando aparecer no terminal: ``Done. now run!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd nome-do-app``

Baixar as dependências com ``npm install``

Depois rodar com ``npm run dev``

Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma prévia de como sua página está ficando.

4) Perceba que ele rodou uma págima pronta! A gente só precisou rodar alguns pequenos comandos no terminal, certo? 

Vamos trocar esse conteúdo pelo nosso hello world. 

Vá até src > App.jsx 

 - Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> 
 - Salve e volte para o navegador! 
 - Uhullllll, agora vamos começar com tudooo a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript/JSX e fazendo aparecer no html. <3

5) Entenda as pastas e arquivos
> node_modules

> index.html

> .gitignore

> package.json

> package-lock.json

> vite.config.js

> src
  >> app.jsx
  >> main.jsx
  >> outros arquivos que não nos interessam agora


<br>
<br>
