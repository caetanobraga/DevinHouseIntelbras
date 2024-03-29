import {Produto} from "./Produto.js";

export class Pedido {
    constructor(numeroPedido, nomeCliente){

        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.estaPago = false;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.listaProdutos = [];
    }

    adicionaProduto(produto) {
        if (produto instanceof Produto){
            this.listaProdutos.push(produto);
            return
        }
    }
}