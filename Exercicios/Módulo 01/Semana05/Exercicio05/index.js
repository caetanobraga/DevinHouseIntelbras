import {Produto} from "./Produto.js";

import {Pedido} from "./Pedido.js";

const pedido1 = new Pedido;

const produto1 = new Produto("telefone",1000,true,4);

const produto2 = new Produto("notebook",3000,true,2);


pedido1.adicionaProduto(produto1);
pedido1.adicionaProduto(produto2);

console.log(pedido1);