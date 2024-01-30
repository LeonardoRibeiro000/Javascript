function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // realiza a soma com a variável let
        // soma += arguments significa que soma = soma + arguments
    }
    return soma
}

console.log(soma())
console.log(soma(399))