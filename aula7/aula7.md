# Ciclo Formativo PretaLab | ReactJS - Aula7 - 16/11 🚀

## ❤️ React hooks (useState)

Relembrando a aula 5...
Em 2018, os hooks chegaram como uma solução para que não precisassemos escrever componentes usando classes. Nós temos hooks internos, que são algumas funções prontas que podemos usar em nossos projetos de react. E temos também a possibilidade de criar nossos próprios hooks costumizados.

Quando você se deparar por aí com alguma função dentro do react escrita assim, esses são os hooks: useState, useEffect, useMemo, useCallback entre outros.

Hoje, vamos focar no useState!

---

## useState

DEFINIR (...)

### 👩🏿‍💻 Vamos de mão na massa:

1. Antes de tudo você precisa importar de dentro do react o hook useState

   ```javascript
   import { useState } from "react";
   ```

2. Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações

   - uma variável onde vamos guardar nosso valor atribuido
   - uma função que vai receber a lógica para atualizar a variável

   ```javascript
   const [contador, setContador] = useState(0);
   ```

   ` Vale ressaltar que dentro do seu estado, seja ele inicial ou não, podemos passar valores de ~~qualquer tipo de dados em javacript~~. Nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entre outros.`

3. Podemos declarar a lógica da nossa função que irá atualizar o nosso estado:

   ```javascript
   setContador((contador) => contador + 1);
   ```

4. Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento

   ```javascript
   setInterval(
     setContador((contador) => contador + 1),
     1000
   );
   ```

   ou

   ```javascript
   function handleClick() {
     setContador((contador) => contador + 1);
   }
   ```

5. Usar nosso estado no html do componente

   ```html
   <button onClick="{handleClick}">+</button>
   <p>{contador}</p>
   <button onClick="{handleClick}">-</button>
   ```

**Missões do dia:**

| Recurso | Descrição 
| --- | ---
| `Contador` | Vamos criar dois botões e um contador que nos mostra esse o valor do contador sendo incrementado e decrementado através dos botões de + e - 
| `Tradutor` | Vamos criar um botão abaixo do título e quando esse botão for criado, deve traduzir o texto do titulo para inglês.
| `Tradutor Plus` | Ainda usando o botão criado na missão acima, quando esse botão for clicado e o texto estiver em português, deve ser mostrado em inglês. Quando esse texto tiver em inglês e for clicado, deve ser mostrado em português.
