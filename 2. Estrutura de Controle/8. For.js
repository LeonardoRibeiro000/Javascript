// Laço de repetição - For
/*      o loop for é utilizado para a repetição de estruturas incrementais, ou seja, 
    em que são adicionados ou diminuídos valores a um índice. 
        Por isso, uma das suas aplicações é para a leitura de variáveis do tipo array.
    For, que significa “para” em português, determina que uma ação deve ser executada 
    a partir de uma condição inicial até que seja encontrada outra que interrompa o laço. 
    O fluxo de repetição é controlado por uma variável, que é testada a cada repetição até que se encontre a condição de

-> Sintaxe: for ([Expressão inicial] ; [Expressão condicional] ; [expressão final]) {
    declaração
}

-> expressão inicial: corresponde à declaração da variável ou à 
atribuição de qual é o valor inicial utilizado. Vale dizer que também pode ser 
atribuída uma expressão para inicializar a variável;

->  expressão condicional ou condição: é uma expressão em que é feito um teste para constatar se a condição é verdadeira para
então, executar o código correspondente ou sair da estrutura de repetição;

-> expressão final; é a alteração da variável utilizada na primeira expressão;

-> declaração: uma instrução específica ou um conjunto de instruções para executar determinada ação.

*/
//====================== EXEMPLO 1 ====================================
for (let i = 1; i < 5; i++) {
    console.log('Estou aprendendo!' , i);
}

//=========== EXEMPLO 2 / MESMA FUNÇÃO SÓ QUE COM WHILE ===============

let contador = 1 // While -> inderteminadas vezes   
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
console.log('Até a próxima')

//===================== EXEMPLO 3 =====================================

for(let i = 1; i <= 10; i++) { // for -> determinadas vezes
    console.log(`i = ${i}`)
}

//===================== EXEMPLO 4 COM ARRAY ===========================
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for ( i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

