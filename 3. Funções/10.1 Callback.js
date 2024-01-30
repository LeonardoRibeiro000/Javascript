// Primeiro criamos um array
/*const notas = [7.7, 6.5, 5.2, 3.9, 7.1, 9.0]
// Sem callback

const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]) // .push adiciona um elemento do array
    }
}

console.log(notasBaixas)

// com callback

const notasBaixas2 = notas.filter(function (nota) { //o método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    return nota < 7
})
console.log(notasBaixas2)*/

// com callback

const notas = [7.8, 8.9, 5.4, 3.1, 6.9];
const notasBaixas = notas.filter((nota) => nota < 7);
console.log(notasBaixas);

const notasAltas = notas.filter((nota) => nota >= 7);
console.log(notasAltas);
