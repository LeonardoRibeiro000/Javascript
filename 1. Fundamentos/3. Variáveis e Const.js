/* -> Nomes de variáveis só podem conter letras maiúsculas e/ou minúsculas, números e sublinhado,
      portanto, não podem conter espaços, hífens ou outros caracteres especiais;
    ->  O primeiro caractere do nome da variável deve ser uma letra ou o sublinhado;    
    ->  Javascript é “case sensitive”, portanto, letras maiúsculas são diferentes de minúsculas. Atenção!!!
    ->  Não há limite oficial no comprimento de nomes de variáveis, portanto, vale o bom senso.
    ->  Utilize sempre nomes mnemônicos, ou seja, que traduzam o conteúdo da variável. 

*/
//DECLARAÇÃO DE VARIÁVEIS =================================================================================================
var a = 3
let b = 4
const c = 5
console.log(a,b,c)

//MUTABILIDADE ============================================================================================================
var a = 30 //o valor pode mudar,e pode usar var de novo
b = 40 // o valor pode mudar, mas não pode usar o let de novo
c = 10 // c é uma constante, então não pode ser alterado
console.log(a,b)




//ESCOPO DE VARIÁVEIS =====================================================================================================

var globalVar = "Eu sou global";  // Escopo global

function exemploEscopo() {
    var localVar = "Eu sou local";  // Escopo de função

    if (true) {
        let blockVar = "Eu sou de bloco";  // Escopo de bloco
        console.log(globalVar);  // Acesso ao escopo global
        console.log(localVar);   // Acesso ao escopo de função
        console.log(blockVar);   // Acesso ao escopo de bloco
    }

    console.log(globalVar);  // Acesso ao escopo global
    console.log(localVar);   // Acesso ao escopo de função
    console.log(blockVar);   // Erro: blockVar is not defined (escopo de bloco)
}

exemploEscopo();