var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];

  var lista = document.getElementById("convidados")

  listaConvidados.forEach((convidado) =>{

    var nomeCompleto = convidado.nome +" "+ convidado.sobrenome;
    var item = document.createElement("li");
    item.innerText=nomeCompleto;
    lista.appendChild(item);
    console.log(item.innerText);
  })