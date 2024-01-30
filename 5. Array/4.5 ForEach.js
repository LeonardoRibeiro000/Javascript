// Itera cada elemento do array percorrendo o array
// sintaxe: váriavel/array.forEach(callback) {argumennto }

//=============== EXEMPLO 1 ==================================

const nums = [1, 2, 3, 4, 5, 6];

nums.forEach((num) => {
  // arrow function
  console.log(num);
});

//=============== EXEMPLO 2 ==================================

// com arrow function
let nomes = ["Léo", "Matheus", "Beto"];

nomes.forEach((nome) => {
  console.log(`O nome é  + ${nome}`); // template string
});

//=============== EXEMPLO 3 ===================================
//função comum -> passa nome e indice como parâmetros

nomes.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

const marcas = ["Fiat", "Chevrolet", "Ford", "Volks"];

marcasIniciadasComF = [];
novoIndice = [];
function selecionarMarcas(item, indice) {
  if (marcas[indice].indexOf("F") == 0) {
    marcasIniciadasComF[novoIndice] = marcas[indice];
    novoIndice++;
  }
}

marcas.forEach(selecionarMarcas);
marcas.sort();
console.log(marcasIniciadasComF);
