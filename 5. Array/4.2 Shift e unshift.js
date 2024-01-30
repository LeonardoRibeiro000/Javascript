//============== shift =============================================

// Remove o primeiro elemento de um array

let frutas = ["Uva", "Melão", "Pera"];
frutas.shift(); // remove o primeiro elemento
console.log(frutas);
console.log(frutas[0]);
//============= unshift: ============================================
// adiciona um ou mais elementos no inicio de um array

frutas.unshift("Banana", "Mamão", "Abacate"); // adiciona um ou mais elementos no inicio do array
console.log(frutas);
frutas[5] = "Jaca";
console.log(frutas);
console.log(frutas.length);
