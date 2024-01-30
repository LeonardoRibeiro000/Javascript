/*===================== map() =======================================================
    permite que você aplique uma transformação para cada elemento do seu array
    gerando um novo array como resultado.
    
    Pode ser usado no lugar do for em um array
*/

// Cria o array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// e seu objetivo é pegar cada número desse array e multiplicá-lo por 2

let dobro = numeros.map(function (item) {
  return item * 2;
});
console.log(dobro);

//======================= exemplo 2 ========================================

const nums2 = [2, 3, 4, 5];
const soma = (e) => e + 10; // arrow function
const resultado = nums2.map(soma);

console.log(resultado);

//================= exemplo de uso do map(): ===============================
//tem uma lista de produtos e precisa extrair o id de cada um

const produtos = [
  { id: 101, categoria: "Limpeza", name: "Amaciante" },
  { id: 102, categoria: "tapawere", name: "Porta queijo" },
  { id: 103, categoria: "Limpeza", name: "Sabão em pó" },
];

console.log(
  produtos.map(function (p) {
    return p.id;
  })
);
//======================== filter() =========================================================
/*
    serve para filtrar itens de um array. Digamos que você tenha o mesmo array de produtos, 
    mas dessa vez, você só quer que fique no array, os produtos com a categoria "Alimento".

*/

const produtos2 = [
  { id: 101, categoria: "Limpeza", name: "Amaciante" },
  { id: 102, categoria: "tapawere", name: "Porta queijo" },
  { id: 103, categoria: "Limpeza", name: "Sabão em pó" },
  { id: 104, categoria: "Alimento", name: "Ovo" },
  { id: 105, categoria: "Alimento", name: "alface" },
];

const alimento2 = produtos2.filter(function (alim) {
  return alim.categoria === "Alimento";
});
console.log(alimento2);

// ============================ MAP e Filter juntos ===========================================

// Digamos que você quer os ids dos produtos, mas somente do alimentos

const produtos3 = [
  { id: 101, categoria: "Limpeza", name: "Amaciante" },
  { id: 102, categoria: "tapawere", name: "Porta queijo" },
  { id: 103, categoria: "Limpeza", name: "Sabão em pó" },
  { id: 104, categoria: "Alimento", name: "Ovo" },
  { id: 105, categoria: "Alimento", name: "alface" },
];

//arrow function ====================================

/*const idsAlimentos = produtos3
  .filter((p) => p.categoria === "Alimento")
  .map((p) => p.id);

console.log(idsAlimentos);*/

// função comun======================================
const idsAlimentos = produtos3.filter(function (p) {
  return p.categoria === "Alimento";
});
produtos3.map(function (p) {
  return p.id;
});
console.log(idsAlimentos);
