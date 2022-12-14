const number = document.getElementById("numero");
const botao = document.getElementById("verifica");
const main = document.getElementsByTagName('main')[0];
const msg = document.getElementById("resultado");

const exibeMsg = (mensagem) => {
    msg.innerHTML= mensagem;
};

const verificaNumero = () =>{
    const numero = parseInt(number.value);

    if (isNaN(numero)){
        exibeMsg('Digite número válido!');
        return;
    }
    const resultado = numero%2 === 0 ? 'par' : 'ímpar';
    exibeMsg(`O número ${numero} é ${resultado}!`);
}

botao.onclick = verificaNumero;