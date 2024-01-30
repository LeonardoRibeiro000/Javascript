// Podemos acessar um array pelo seu indice, por exemplo: arr[1]
// lembrando que o primeiro indice sempre é 0, ou seja, para acessar o primeiro elemento: arr[0];

let numeros = [1, 3, 5, 7, 9];

console.log(numeros[1]);
console.log(numeros[numeros.length - 1]); // acessar o último elemento

numeros[7] = "Bianca"; // adicionei o indice 7
numeros.sort(); // organizar o array
console.log(numeros);
