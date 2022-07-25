let contasClientes = [
    {
        id: 1,
        nome: 'Cliente 01',
        saldo: 500,
    },
    {
        id: 2,
        nome: 'Cliente 02',
        saldo: 3000,
    },
    {
        id: 3,
        nome: 'Cliente 03',
        saldo: 5000,
    },
    {
        id: 4,
        nome: 'Cliente 04',
        saldo: 5000,
    },
    {
        id: 5,
        nome: 'Cliente 05',
        saldo: 3000,
    },
    {
        id: 6,
        nome: 'Cliente 06',
        saldo: 5000,
    },
    {
        id: 7,
        nome: 'Cliente 07',
        saldo: 5000,
    },
]

const body = document.body;
const selectClientes = document.getElementById("contasselect");
const form = document.getElementById("form");
const strongMensagem = document.getElementById("mensagem");

const populaSelect = ()=> {
    for(cliente in contasClientes) {
        option = new Option(contasClientes[cliente].nome, contasClientes[cliente].id);
        selectClientes.options[selectClientes.options.length] = option;      
  }
}

body.onload = populaSelect;

const exibeMensagem = (mensagem, type = 'error') => {
    strongMensagem.textContent = mensagem;
    strongMensagem.className = type === 'error'?'error':'success';
}

const validaValor = (valor) => {
    if(isNaN(valor) || valor <= 0 ){
        exibeMensagem('Valor inválido')
        return false;
    }
    return true;
}

const atualizaSaldo = (contaAtual, saldo) => {
    const contaSemContaAtual = contasClientes.filter((account) => account.id !== contaAtual.id);
    const contasAtualizadas = [...contaSemContaAtual, {...contaAtual, saldo}];
    contasClientes = contasAtualizadas;
}

const fazSaque = (contaAtual, valor) => {
    if(!validaValor(valor)){
        return;
    }

    if (valor > contaAtual.saldo){
        exibeMensagem(`Saldo insuficiente. Saldo atual: ${contaAtual.saldo}`);
        return;
    }
    const novoSaldo = contaAtual.saldo - valor;
    atualizaSaldo(contaAtual, novoSaldo);
    exibeMensagem(`Saque efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success');
}

const fazDeposito = (contaAtual, valor) => {
    if(!validaValor(valor)){
        return;
    }

    const novoSaldo = contaAtual.saldo + valor;
    atualizaSaldo(contaAtual, novoSaldo);
    exibeMensagem(`Deposito efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success');
}

const operacoes = (event) => {
    event.preventDefault()

    fazSaque(contasClientes[0], 200);
}

form.onsubmit = operacoes;