import {Produto} from "./Produto.js";

import {Pedido as pedido}  from "./Pedido.js";

const pedido1 = new pedido(20220001, "Caetano");
const pedido2 = new pedido(20220002, "Nicolas");

const produto1 = new Produto("telefone",1000,true,4);

const produto2 = new Produto("notebook",3000,true,2);
const produto3 = new Produto("carro",35000,true,1);

const produto4 = new Produto("teclado",100,true,2);
const produto5 = new Produto("mouse",100,true,3);




pedido1.adicionaProduto(produto1);
pedido1.adicionaProduto(produto2);
pedido1.adicionaProduto(produto3);

pedido2.adicionaProduto(produto4);
pedido2.adicionaProduto(produto5);



console.log("Pedido 1: ", pedido1);

console.log("Pedido 2: ", pedido2);