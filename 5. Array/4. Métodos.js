// Métodos são propriedades que funcionam como funções

// Strings e arrays contém métodos

let marca = "Nike";
console.log(typeof marca.toUpperCase);
console.log(marca.toUpperCase());

// string.propriedade -> sem parênteses
// string.metodo() -> método é escrito como função, com parênteses

// ============= Pop é um método ==================================

const pilotos = ["Vetel", "Alonso", "Raikknen", "Massa"];
pilotos.pop(); // removeu a última propriedade
console.log(pilotos);
