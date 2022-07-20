**[M1S03] Ex 9 - Projeto: desafio final**

### Descrição

[Editar](https://trello.com/c/lN17bTOv/32-m1s03-ex-9-projeto-desafio-final#)

Agora que já temos o código praticamente todo implementado, adicione em cada uma das iterações forEach do exercício uma verificação para saber se `openBar` do convidado é `true`. Caso seja true, imprima, junto ao seu nome, um emoji 🍹!

```
// exemplo de implementação:

listaDeObjetos.forEach((objeto) => {
  if (objeto.propriedadeBooleana) {
    elemento.innerHTML +=
      "<li> Deu verdadeiro! 😀</li>";
  } else {
    elemento.innerHTML +=
      "<li> Deu falso... 😪</li>";
  }
});
```

Dica: o Emoji é um caractere de texto. Você pode copiar e colar dentro da sua string como se fosse uma letra! 

[![img](https://emojipedia.org/static/img/favicons/favicon-16x16.png)📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/)https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669)