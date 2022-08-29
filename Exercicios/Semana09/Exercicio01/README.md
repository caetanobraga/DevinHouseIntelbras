**[M1S09] Ex 2 - Criar um contexto com provider**

Vamos criar um contexto para armazenar a lista dos produtos selecionados

- Crie o contexto
- Crie o provider
   - Adicione um estado para armazenar os produtos selecionados
      - Dica: utilize use useState
   - Crie uma função para selecionar/des-selecionar o card 
      - Dica: mova a função handleSelecionar desenvolvida no exercicio 7 da semana passada e altere ela para ao invés de receber apenas o id receber todas as informações do produto, ou seja, o objeto produto
   - Crie um função para retornar se o card está selecionado, ela deve receber por parâmetro um id e retornar se o card está selecionado ou não
      - Dica: utilize o método some do array
   - Exponha no contexto através da prop value do provider a lista dos produtos selecionados e as funções criadas
- Adicione o provider por volta da aplicação

**[M1S09] Ex 3 - Criar custom hook para o contexto criado**

Vamos criar um custom hook para facilitar a utilização dos valores do contexto

- Crie um custom hook que exponha os valores do contexto;

**[M1S09] Ex 4 - Utilizar custom hook do contexto**

Vamos utilizar os valores do contexto para modificar item selecionado e verificar se está selecionado

- No componente de card:
   - Remova as props  `selecionado` e `onSelecionar`
   - Adicione o hook criado e obtenha dele as funções de onSelecionar e validar card selecionado
   - Altere o jsx para respeitar os valores do contexto e não mais os que eram recebidos por parâmetro.
      - Dica: lembre que agora a propriedade de selecionado não vem mais um booleano e sim uma função que precisa ser chamada, então pode criar uma variável dentro do projeto e nela chamar a função. Ex: const selecionado = validaCardSelecionado(id)
- No componente ListaCards remova o state e a função de handle além de remover as props `selecionado` e `onSelecionar` passadas para o card
- Validar e garantir que tudo continua funcionando como antes.

