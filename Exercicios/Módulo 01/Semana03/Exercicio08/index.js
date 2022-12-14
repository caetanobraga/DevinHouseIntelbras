const convidado1 = {
  nome: "José",
  sobrenome: "Carlos",
  setor: "camarote",
  idade: 18,
};

const convidado2 = { 
  nome: "Alessandro",
  sobrenome: "Viana",
  setor: "camarote",
  idade: 16,
};

const convidado3 = { 
  nome: "Paulo",
  sobrenome: "Lopez",
  setor: "pista",
  idade: 22,
};

const convidado4 = { 
  nome: "Paula", 
  sobrenome: "Souza", 
  setor: "pista",
  idade: 28,
};

const convidado5 = { 
  nome: "Cláudia", 
  sobrenome: "Torres", 
  setor: "arquibancada", 
  idade: 15,
};

const convidado6 = { 
  nome: "Noemi", 
  sobrenome: "Nakamura", 
  setor: "arquibancada", 
  idade: 34,
};

var listaDeConvidados = [
  convidado1, convidado2, convidado3,convidado4, convidado5, convidado6
];

const convidadosComBebidasProcessada = listaDeConvidados.map(convidado => {
  const convidadoAlterado = Object.assign({}, convidado);
    convidado.idade >= 18 ? convidadoAlterado.openBar=true : convidadoAlterado.openBar=false;
  return convidadoAlterado;
});

const convidadosDoCamarote = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "camarote");
const convidadosDaPista = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "pista");
const convidadosDaArquibancada = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "arquibancada");



var listaCamarote = document.getElementById("camarote")
var listaArquibancada = document.getElementById("arquibancada")
var listaPista = document.getElementById("pista")


convidadosDoCamarote.forEach((convidado) =>{
  var item = document.createElement("li"); 
  item.innerText=convidado.nome+" "+convidado.sobrenome;
  listaCamarote.appendChild(item);
})

convidadosDaArquibancada.forEach((convidado) =>{
  var item = document.createElement("li"); 
  item.innerText=convidado.nome+" "+convidado.sobrenome;
  listaArquibancada.appendChild(item);
})


convidadosDaPista.forEach((convidado) =>{
  var item = document.createElement("li"); 
  item.innerText=convidado.nome+" "+convidado.sobrenome;
  listaPista.appendChild(item);
})


  