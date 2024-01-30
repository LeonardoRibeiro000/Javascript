{{{{{var sera = "será?"}}}}}
console.log(sera)
/* a variável VAR dentro de um bloco de código que não seja uma função
ela ficará visível para todo mundo, mesmo que em outro bloco de código

*/

function teste() {
    var local = 123
    console.log(local) /* Quando cria uma variável 
                          dentro de uma função, o escopo
                          da variável é apenas dentro da 
                          função
    
    */
}
teste()
console.log(local) // fora da função vai dar "variável não definida"


//Retorna o valor de x
const exibirValor = () => {
    if(true){
        var x = 10;
    }
    console.log(x)
}

exibirValor()

//Retorna um erro
const exibirValor2 = () => {
    if(true){
        let x = 10;
    }
    console.log(x)
}

exibirValor()

