// Desestruturação usando estrutura do array

const [a] = [10]
console.log(a)

const [n1, , n3 , ,n5, n6= 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// desestruturando de um array usa-se colchetes []
// destruturando de um objeto usa-se chaves {}


const pessoas = [['Rodrigo', 'Simone', 'Mateus', 'Lucas', 'João']]

