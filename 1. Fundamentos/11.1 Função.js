// Função é um bloco de código nomeado
/* Quando queremos utilizar 
o mesmo código várias vezes 
só acrescentando valores, utilizamos uma função
*/
/*
função comun -> function nome da função (parâmetros) {comandos da função}
ex: function soma (a,b) {return a+b} 

função anônima -> não precisa do nome da função pois já tem variável -> var soma = function(argumentos){código}
ex: var soma = function(a,b) {return a+b}

Função Arrow -> forma simplificada de fazer uma função -> variável = (argumentos) =>{comando}
ex: var soma = (a,b) => {return a+b}

*/

// 1° Função -> sem retorno
function imprimirSoma(a , b) {
    console.log(a + b)
}
imprimirSoma(2 , 3) // acrescenta valor em a e b
imprimirSoma(2) // acrescenta só um valor
imprimirSoma(2, 10, 3, 4, 6)
imprimirSoma() // Not a number

// 2° Função -> com retorno
function soma (a, b = 0) {
return a + b
}
console.log(soma(2,5))
console.log(soma(2))
console.log(soma()) // not a number NaN