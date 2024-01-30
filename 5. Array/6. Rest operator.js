/*Rest Operator

*  Uma forma de uma função receber indefinidos parâmetros;
*  O operator rest vai virar um array;
*  O parâmetro é definido por: ...nome

*/

//exemplo
let num = 1
let num1 = 2
let num2 = 3
let num3 = 4

function imprimirNumeros(...args) {
    for(let i = 0; i <  args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num, num1, num2, num3)
console.log('pausa')

