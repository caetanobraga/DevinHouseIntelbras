var ano = prompt("Digite um ano...");
console.log(ano);
var anoAtual = new Date().getFullYear();

console.log = anoAtual

if (!isNaN(ano)) {
    window.alert("Diferença em anos entre o ano digitado e o atual: " + parseInt(anoAtual - ano));
} else {
    window.alert("Digite um número válido!");
}

document.location.reload(true);