const diminui = document.getElementById("diminui")
const adiciona = document.getElementById("adiciona")
const numeroAtual = document.getElementById("numeroAtual")


adiciona.addEventListener("click", () => {
    parseInt(numeroAtual.innerHTML++);
});

diminui.addEventListener("click", () => {
    parseInt(numeroAtual.innerHTML--);
});

