/* Reduce: 
    A ideia do reduce, é produzir um único valor a partir de um array. 
    imagine que você tem uma lista de números e que você quer saber a soma
    total de todos eles
*/

const numeros1 = [1, 2, 3, 4]

const somar = (acumulado, x) => acumulado + x 
const total1 = numeros1.reduce(somar)

console.log(total1)


// Reduzindo um array de forma tradicional 
let total = 0
let numeros = [1, 2, 3, 4,  5, 6]
for (let i = 0; i < numeros.length; i++) {
    total += numeros [i]
}

console.log(total)

// Retornar um array com reduce
let numeros2 = [1, 2, 3, 4, 5, 6]
let total2 = numeros2.reduce(function(total2, numero){
    return total2 + numero
}, 0)

console.log(total2)
console.log(typeof total2)

// =====================================================================================
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},

]

    console.log(alunos.map(a => a.nota)) // retorna todas as notas que estão no array

    const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
            return acumulador + atual
        
    },0)
console.log(resultado)



