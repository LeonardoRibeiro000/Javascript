// o método flamap retorna uma cadeia de arrays em um só array, é a junção do método map com concat

//exemplo

const arrayNivel1 = [1, 2, 3];
console.log(arrayNivel1); // retorna um só array

const arrayNivel2 = [[4, 5, 6]];
console.log(arrayNivel2); // retorna um array dentro de um array

const total = arrayNivel1.concat(arrayNivel2);
console.log(total); // junta os arrays

console.log(arrayNivel2.map((a) => a * 2));

/*const numeros = [1, 2, 3, 4, 5]

//console.log(numeros.map(item =>[item, item * 100]))

console.log(numeros.flatMap(item => [item, item * 100]))*/
