function submitFormContact() {
    //Obtem os elementos do formulário
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var descricao = document.getElementById('descricao');

    //Exibe no console as informações do formulário
    console.log(
        'Formulário de contato:',
        '\nNome: ' + nome.value,
        '\nE-mail: ' + email.value,
        '\nDescrição: ' + descricao.value
    );

    //Exibe o alerta na tela
    alert('Formulário enviado com sucesso!');

    //Limpa os campos do formulário
    nome.value = '';
    email.value = '';
    descricao.value = '';
}
