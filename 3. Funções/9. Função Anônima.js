/*função anônima -> não precisa do nome da função, pois já tem variável 

Sintaxe -> var  = function(argumentos){código}

ex: var soma = function(a,b) {
    return a+b
}

*/


const soma = function (x, y) {
    return x + y
}
console.log(soma(3,4))
console.log(soma(10,10))

// função anônima dentro de um objeto

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}
pessoa.falar()


