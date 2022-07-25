const data = document.getElementById('data');
const estacao = document.getElementById('estacao');
const imagem = document.getElementById('img');




const atualizaInformacoes = ({texto, urlImg}) => {
    estacao.innerText = texto;
    imagem.src = urlImg;
}

const verificaEstacao = (event) => {
    const dataFormatada = new Date(`${event.target.value} 00:00`)
    const dia = dataFormatada.getDate();
    const mes = dataFormatada.getMonth() + 1;


    // -- 22/03 a 21/06 - Outono; 
    if ((dia >= 22 && mes ===3) || mes === 4 || mes ===5 || (dia <= 21 && mes ===6))  {
        atualizaInformacoes({texto : 'Outono', urlImg: 'imagens/outono.webp'});
        return;
    }
    // -- 22/06 a 21/09 - Inverno; 
    if ((dia >= 22 && mes ===6) || mes === 7 || mes === 8 || (dia <= 21 && mes ===9))  {
        atualizaInformacoes({texto : 'Inverno', urlImg: 'imagens/inverno.webp'});
        return;
    }
    // -- 22/09 a 21/12 - Primavera.
    if ((dia >= 22 && mes ===9) || mes === 10 || mes === 11 || (dia <= 21 && mes ===12))  {
        atualizaInformacoes({texto : 'Primavera', urlImg: 'imagens/primavera.jpg'});
        return;
    }
    // 22/12 a 21/03 - Verão; 
    if ((dia >= 22 && mes ===12) || mes === 1 || mes === 2 || (dia <= 21 && mes ===3))  {
        atualizaInformacoes({texto : 'Verão', urlImg: 'imagens/verao.jpg'});
        return;
    }

}

data.onchange = verificaEstacao;