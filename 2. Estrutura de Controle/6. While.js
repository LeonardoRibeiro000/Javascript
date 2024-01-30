/* Quando tiver uma quantidade inderteminada de repetições, utiliza-se o while;

    -> Fará uma ação, até que a condição seja atiginda
    -> Precisamos realmente definir um fim para o loop, para nao termos o problema de loop infinito

-> Sintaxe -----> 
    while (condição) {
        rotina
    }

    condição -> uma expressão avaliada antes de cada passagem através do laço
    rotina -> uma declaração que é executada enquanto a condição é avaliada como verdadeira

*/
//=====================EXEMPLO 1======================================================================================
let x = 0
    while(x <=  10) { // aqui colocamos até aonde queremos que repita o laço (x até ser igual ou menor que 10)
        console.log(x)
            x++ // aqui é para incrementar sempre 1
}

//====================EXEMPLO 2========================================================================================
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Math.random retorna um valor pseudo-aleatório entre 0 e 1
        return Math.floor(valor) // math.floor arredonda o valor para baixo
}
let opcao = 0
    while (opcao != -1) {
        opcao = getInteiroAleatorioEntre(-1, 10)
            console.log(` Opção escolhida foi ${opcao}, `)
}
                console.log('Até a próxima')


let min = 1
let max = 10
console.log(Math.floor(Math.random() * (max - min) + min))