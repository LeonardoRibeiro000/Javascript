// Armazenando uma função em uma variável

const imprimirSoma = function(a, b){
    console.log(a + b)

}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável

const soma = (a , b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implicíto // forma reduzida de function
const subtracao = (a ,b) => a - b  // arrow function
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')


