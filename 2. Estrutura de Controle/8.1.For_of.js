/*for (let elemento of iterable) {
    // Código a ser executado para cada elemento
}
elemento: Variável que representa o valor do elemento atual durante a iteração.
iterable: Objeto iterável sobre o qual queremos iterar.

*/

function elevarAoQuadradoPositivos(arr) {
    const resultados = [];

    for (let numero of arr) {
        // Verifica se o número é positivo
        if (numero > 0) {
            // Eleva o número ao quadrado e adiciona ao array de resultados
            const resultado = numero ** 2;  // ou Math.pow(numero, 2);
            resultados.push(resultado);
        }
    }

    return resultados;
}

// Exemplo de uso
const numeros = [1, -2, 3, -4, 5];
const resultados = elevarAoQuadradoPositivos(numeros);
console.log(resultados);  // Saída: [1, 9, 25]


