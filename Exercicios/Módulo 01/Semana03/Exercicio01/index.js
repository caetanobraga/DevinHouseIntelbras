var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

//listaNumeros.forEach(dobraNumeros);

// function dobraNumeros(numero, index, arr){
//     arr[index] = numero * 2;
// }

listaNumeros.forEach((numero,index) => {
    listaNumeros[index] *= 2;
});

console.log(listaNumeros);