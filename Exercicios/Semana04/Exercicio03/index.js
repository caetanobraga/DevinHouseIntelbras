const contasClientes = [
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
];


const body = document.body;
var selectClientes = document.getElementById("contasselect");


const contasSelect = ()=> {for(cliente in contasClientes) {
    option = new Option(contasClientes[cliente].nome);
    selectClientes.options[selectClientes.options.length] = option;
  }
}

body.onload = contasSelect;