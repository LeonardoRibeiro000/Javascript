// IIFE -> Immediately Invoked Function Expression
/*
IIFE é uma função em JS que é executada assim que é definida

Contém duas partes principais

1° ->  A primeira é a função anônima cujo escopo léxico 
       é encapsulado entre parênteses. Isso previne o acesso externo 
       às variáveis declaradas na IIFE, bem como evita que estas variáveis locais 
       poluam o escopo global. 


2° -> A segunda parte corresponde à criação da expressão (),
      por meio da qual o interpretador JavaScript avaliará e executará a função.

*/
// Executa assim que definida
(function() {
    let nome = 'Léo'
    console.log(nome)
    console.log('Foge do escopo mais abrangente!')
}) () // só executa se houver -> () no final 


//Função comun
function nome () {  
    return 'Léo'
}
console.log(nome())