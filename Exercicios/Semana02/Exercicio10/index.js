const titulo = document.getElementById("titulo")
const novoTitulo = document.getElementById("novoTitulo")
const alteraTitulo = document.getElementById("alteraTitulo")


alteraTitulo.addEventListener("click", () => {
    titulo.innerHTML = novoTitulo.value
});
