export class Pedido {

    constructor(numeroPedido, nomeCliente){

        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.estaPago = false;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.listaProdutos = [];
    }
}

const pedido = new Pedido(1,"caetano")


console.log(pedido)