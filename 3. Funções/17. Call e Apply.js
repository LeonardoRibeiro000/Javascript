/* 
O método call() é uma função capaz de alterar o valor this. 
Por padrão, o primeiro parâmetro que recebe é o valor do this e o 
demais parâmetros são da função que invoca o método Call.
*/

function sayHello () {
    console.log('Hello, ' + this.name)
}

const user1 = {
    name: 'Léo',
   
}

//sayHello() // retorna o valor underfined pois a função 'sayHello não tem
           // ligação com o objeto 'user1'
           // pois procura this.name no objeto global e não encontra     
// Podemos utilizar o call para especificar o contexto de this no objeto user1
sayHello.call(user1)


//Função call em função que recebe argumentos

function commentHobby (opinion) {
    console.log('I' + opinion + ' ' + this.hobby)
}
const user2 = {
    name: 'Léo',
    hobby: 'Play video game'
}

commentHobby.call(user2, ' love') // love está substituindo o parãmetro opinion

//apply
/*
O Apply funciona exatamente como o método Call, porém seu segundo parâmetro  
recebe um Array dos parâmetros da função, enquanto o primeiro parâmetro 
continua recebendo o valor que será atribuído ao this. 
Vejamos um novo exemplo, mas agora utilizando o apply:

*/
function sayWhere(city, country) {
    console.log('I am ' + this.name + ',' + ' i´m from ' + city + ',' + country );
}

const user3 = {
    name: 'Léo'
}

sayWhere() // não retorna porque não ligação etre o objeto e a função

sayWhere.apply(user3, ['Paris' , 'France']);

