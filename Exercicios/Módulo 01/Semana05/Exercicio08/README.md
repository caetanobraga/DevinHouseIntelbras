**[M1S05] - Ex 8 - Chamando métodos de classe**





Estas classes criadas durante os exercícios estão prontas para serem utilizadas em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, através da propriedade **listaProdutos**, podemos realizar uma iteração nos produtos de determinado pedido e imprimir cada um deles em tela.

Podemos chamar o método **calcularTotal** para exibir em tela o valor total de um determinado pedido.

Crie uma página HTML para exibir os nossos produtos. Use sua criatividade para criar como desejar. Segue um exemplo (vide anexo):

https://www.figma.com/file/DmL9QdpGuOcZGj9YnDgDNv/Exemplo-P%C3%A1gina-de-Pedidos?node-id=0%3A1

A página deve exibir cada pedido e, em cada pedido, exibir cada produto. Você pode criar cada _card_ de pedido dentro de uma div ou pode criar uma função que receba como argumento o pedido e monte toda a estrutura HTML. Depois, utilizando **appendChild**, você poderá adicionar esse _card_ de pedido em qualquer lugar da página que você desejar.

**Sugestões**

- Inicie com uma página HTML estática, colocando dados fictícios simulando um pedido e uma lista de produtos
- Depois que a página estiver pronta, crie um módulo JavaScript que reunirá todas as funções de montagem da tela.
- Cada classe pode ficar em seu próprio módulo JavaScript e todos os módulos podem ser importados em um único módulo `index.js`, que será importado no HTML posteriormente.

**Bônus!!!! **
Dica: você pode utilizar o **toLocaleString** em um número para formata-lo como moeda. [Dê uma olhadinha neste link...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)