/*Função Arrow -> forma simplificada de fazer uma função, não precisa do nome global function e do return

sintaxe-> variável = (argumentos) => comando

ex: var soma = (a,b) => {return a+b}
*/
// Função comun com variável

let dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

// Função arrow
dobro = a => 2 * a
console.log(dobro(10))

// Função sem return
let saudacao = function () {
    console.log('Olá Cabeça de pika')
}

saudacao()

saudacao = () => 'Olá cabeça de pika'
console.log(saudacao())