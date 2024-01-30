/* Funções construtoras servem como molde para a criação de objetos.

Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. 
O this dentro delas se referencia ao objeto criado a partir delas.
*/

// instância é um objeto criado a partir de uma função construtora privada
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
const carro1 = new Carro("Charger", "RT", "1970"); // o 'new" instancia um novo objeto
console.log(carro1);
// a função contrutora cria um objeto

function Ana(CordeCabelo, altura, idade) {
  this.Cordecabelo = CordeCabelo;
  this.altura = altura;
  this.idade = idade;
}
//Precisamos colocar o objeto dentro de uma constante
//Palavra 'new' é usado para fazer a instanciação do objeto
const mulheres1 = new Ana("Preto", "1,70", "24");
console.log(mulheres1);
