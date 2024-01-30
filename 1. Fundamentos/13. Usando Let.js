var numero = 1 // Variável global
{
    let numero = 2 // Variável local
    // valor 2 não sobrescreveu o valor 1
    console.log('dentro =', numero)
    // se utilizar o var no lugar do let dntro do bloco de código
    // o mesmo vai sobrescrever o var numero = 1 que está fora do bloco


}
console.log('Fora =', numero)

// Variáveis globais têm o script inteiro como escopo
// variáveis locais têm uma única função como escopo


