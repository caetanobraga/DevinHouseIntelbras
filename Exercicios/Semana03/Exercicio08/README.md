**[M1S03] Ex 8 - Projeto: criando um HTML e manipulando a DOM**

Agora que nossas funções de filtros estão prontas, vamos manipular o DOM e montar uma interface. Construa uma interface utilizando o mock up abaixo, ou, se preferir, pegue os códigos prontos HTML e CSS disponibilizados nos links.

(https://www.figma.com/file/BH3j77Y4EQcEINoeuBciDG/Mock-Exemplo-da-Lista?node-id=0%3A1) 

Capture cada uma das listas `ul` de cada uma das colunas da página HTML em uma variável utilizando um dos métodos document.getElementById (precisa adicionar um ID na tag HTML) ou document.querySelector (selecionar por uma das classes CSS). No código disponibilizado pelo professor, os elementos `ul` já possuem um ID.

Cada uma das funções `separarCamarote`, `separarPista` e `separarArquibancada` criadas no exercício 7 retorna um array de elementos filtrados. O seu desafio será fazer com que cada uma das colunas HTML exiba a lista de convidados com base no seu setor. Você pode utilizar o método `forEach` para iterar sobre cada objeto na lista e adicionar ao `innerHTML`um `li` com o nome completo do convidado (nome e sobrenome).

Códigos HTML e CSS de exemplo: [https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669](https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669)