const peso1 = 1.0
const peso2 = Number('2.0') // Number
console.log(typeof Number)/* Number com N maiúsculo é uma função
    number com n minúsculo é um número
*/

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //se o valor é inteiro ou falso
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed -> Fixa e arredonda 'n' casas decimais
console.log(media.toString()) // retorna o valor como string
console.log(typeof media )


// Cuidados com o Number

console.log(7 / 0) // infinity
console.log("10" / 2) // Mesmo o 10 sendo string, faz a divisão
console.log("Show" * 2) // Not a number NaN
console.log(0.1 + 0.7) // 0.799999999999
console.log(10.350.toFixed(2))







