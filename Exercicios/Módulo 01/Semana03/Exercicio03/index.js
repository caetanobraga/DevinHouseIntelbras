var operacao = window.prompt("Digite a operacao desejada +, -, /, * ");

if (operacao != "+" && operacao != "-" && operacao != "/" && operacao != "*"){
    window.alert("Digite uma operação válida");
    document.location.reload(true);
}

var numero1 = window.prompt("Digite o primeiro numero ");
var numero2 = window.prompt("Digite o segundo numero ");

if (operacao === "+") {
    resultado = parseInt(numero1)+parseInt(numero2);
}if (operacao === "-") {
    resultado = parseInt(numero1)-parseInt(numero2);
}if (operacao === "/") {
    resultado = parseInt(numero1)/parseInt(numero2);
}if (operacao === "*") {
    resultado = parseInt(numero1)*parseInt(numero2);
}

if (!isNaN(numero1) || !isNaN(numero2)) {
    window.alert("Resultado da operação: " + resultado);
    document.location.reload(true);
 } else {
     window.alert("Digite um número válido!");
     document.location.reload(true);
 }
