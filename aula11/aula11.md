# Ciclo Formativo PretaLab | ReactJS  - Aula 11 - 23/11 🚀 

✓  Como usar CSS em react 

---

## Como usar CSS em react

Até aqui fizemos tudo sem estilizar, apenas usando o estilo que já vinha por default com o vite. Mas para ser uma pessoa desenvolvedora que cria interfaces de usuárias precisamos também saber fazer isso muito bem. Então chegou a hora de aprontar todas com css no ReactJs.

Talvez você tenha sido curiosa e já começou a fazer isso por conta própria e eu te parabenizo por isso. Mas talvez tenha encarado alguns problemas como:

- sobreposição de estilo quando se utiliza o seletor pela tag
- não saber como importar imagens
- não saber como importar fontes

No react temos algumas facilidades para criar estilos dos nossos componentes e páginas. Você pode usar algumas bibliotecas como o styled components, saas, material-ui, bootstrap, tailwind, ant design entre outras.

Mas hoje, vamos fazer aqui da forma raiz com o css purinho com css-modules. Mas antes vamos responder esses possíveis problemas citados acima!

### Como colocar uma fonte personalizada em projetos reactjs

Para usarmos fontes do google no react, podemos seguir os passos abaixo:

1) Vá até o site https://fonts.google.com/ e escolha sua fonte e variações
2) Copie os links no head do seu index.html 

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou

3) Use a fonte no seu arquivo de css 

```
font-family: 'Roboto', sans-serif;
```

### Como usar imagens no reactjs

Para usarmos imagens em react, podemos seguir os passos abaixo:

1) Salve sua imagem numa pasta nomeada de assets
2) Importe sua imagem guardando numa variável

```
import Image from '../assets/minha-imagem.png
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou

3) Para usar a imagem no componente

```
<img src={Imagem} alt="uma ilustração de um computador"/>
```

>> dentro do src use a variável que você atribuiu no import

>> é obrigatório usar o atributo alt, informando um texto alternativo coerente para o caso da imagem não carregar.


### O que é css-modules?
Uma forma de escrever css que garante que cada classe será única evitando sobrescrever estilos, pois "o carregador css do Webpack no modo de módulo substitui cada identificador de escopo local por um nome exclusivo global (com hash do nome do módulo e do identificador local por padrão) e exporta o identificador usado."

Documentação: https://github.com/css-modules/css-modules
#### Para usarmos css-modules em react, podemos seguir os passos abaixo:

1) Crie seu arquivo com extensão nome-do-arquivo.module.css

2) Importe seu arquivo

```
import styles from './nome-do-arquivo.module.css'
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou na pasta

3) Para usar o estilo você pode atribuir className e id como seletor de css, prefira não usar a própria tag. (atenção pois a declaração da classe no css modules muda)

```
<img className={styles.minhaClasse} src={Imagem} alt="uma ilustração de um computador"/>
```

4) Dentro do arquivo de css, você vai usar os seletores e propriedades exatamente como você aprendeu no início dos estudos.

>> é importante ter atenção para não sobrescrever estilos de forma inesperada

>> para zerar seu estilo de forma global na aplicação você pode importá-lo nas camadas acima do componente, como o index ou app. 