// par nome/valor
const saudacao = 'Opa' /*definição de uma 
                         variável ou constante 
                         dentro de um contexto léxico 1 */

function exec () {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
