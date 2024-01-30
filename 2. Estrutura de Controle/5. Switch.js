/* Switch => Estrutura condicional igual o IF 
             - usado quando precisa avaliar diversos valores em uma mesma variável
             - Quando há a necessidade de usar vários ifs, podemos usar o switch/case
             - Para sair de um case, usamos o break


*/ //Sintaxe padrão do switch
let numero = 3 // 1° Declara a variável
    switch(numero) { // 2° -> switch (variável)  {casos}
        case 1:  // 3° -> case
            console.log("O número é o 1"); // 4° imprime
                break; // 5° interrompe o bloco do código, evita executar todos de uma vez
                      // se tirar o "break" vai ser executado todas as condições
}

// switch case com a valor default
// default === else 
// =========================exemplo usando o switch============================================
switch (numero) {
    case 1: 
        console.log('O número é o 1');
        break;
    case 2:
        console.log('O número é o 2');
        break;
    default: // quando não entra em nenhum dos casos, o código executa o default.  
        console.log('O número não é nem 1 e nem 2');
        break;
}// ========================Mesmo exemplo usando o vários ifs==================================

    function numero1 (num) {
        if (num == 1) {
            return 'O número é 1'
        } if (num === 2) {
            return 'o número é 2'
        }else {
            return 'o número não é nem 1 e nem 2'
        }
        
    }
    console.log(numero1(3))
 //===============================================================================================   

// switch case com várias condições juntas
let nota = 6
switch (nota) {
    case 10: 
    case 9:
    case 8:
    case 7:
        console.log('Aluno aprovado');
        break;
    
    default:
        console.log('Aluno Reprovado');
        break;
}

// Exercício Switch Case
const imprimirResultado = function(nota) { // atribuindo variável a uma função
    switch (Math.floor(nota)) {  // Math.floor => arredondamento para baixo
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: 
            console.log('Nota Inválida')
            break

    }
}

imprimirResultado(10)
imprimirResultado(5.5)
imprimirResultado()
imprimirResultado(2)
imprimirResultado(6.9)
imprimirResultado(7)