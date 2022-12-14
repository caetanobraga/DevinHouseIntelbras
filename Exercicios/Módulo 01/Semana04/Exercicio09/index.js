const idade = document.getElementById("idade");
const botao = document.getElementById("classifica");
const msg = document.getElementById("resultado");

const exibeMsg = (mensagem) => {
    msg.innerHTML= mensagem;
};

const classificaIdade = () =>{
    const idadeRecebida = parseInt(idade.value);

    if (isNaN(idadeRecebida)){
        exibeMsg('Digite número válido!');
        return;
    }
    if (idadeRecebida <= 15){
        exibeMsg(`Com idade de ${idadeRecebida} é jovem!`);
        return;
    }
    if (idadeRecebida >= 16 && idadeRecebida <= 64){
        exibeMsg(`Com idade de ${idadeRecebida} é adulto!`);
        return;
    }
    if (idadeRecebida > 64){
        exibeMsg(`Com idade de ${idadeRecebida} é idoso!`);
        return;
    }
}

botao.onclick = classificaIdade;