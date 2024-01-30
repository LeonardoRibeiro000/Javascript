

//function declaration ->forma tradicional
/*Na forma tradicional não importa se o console.log vem antes o depois
da função, é excutado da mesma forma */
console.log(soma(3,4))
function soma (a,b){
    return a + b
}

//Function expression -> Função Anônima em uma variável/const
/*Na função anônima em uma variável só é executado após a declaração da função */
const sub = function (x,y) {
    return x - y
}
console.log(sub(9,5))


// named function expression -> função nomeada em uma variável/const
/*Na função nomeada em uma variável a execução só se dar após a declaração da função */
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(288,588))
