//================ push e pop ====================================

// push -> inserir um elemento no array
// pop -> remover o último elemento do array

let pessoas = ["Matheus", "João", "Ricardo"];
let pessoaRemovida = pessoas.pop(); // remove o último elemento
console.log(pessoas); // retorna [Matheus , João]
console.log(pessoaRemovida); // "Ricardo"

pessoas.push("Léo"); // adiciona o elemento "Léo"
console.log(pessoas);
pessoas[4] = "Rodrigo";
pessoas.sort();
console.log(pessoas);

//================= Delete ========================================

// deletar um indice com "delete"
carros = ["BMW", "Volks", "Audi"];
delete carros[0];
carros.sort(); // organiza ao array
console.log(carros);

//================== Splice ========================================

// splice -> adiciona, remove e adiciona/remove um elemento do array

aprovados = ["Júlia", "Rodrigo", "Ricardo"];
aprovados.splice(1, 2);
console.log(aprovados);

const produtos = ["Arroz", "Feijão", "Linguiça", "Macarrão"];

produtos.splice(1, 2);
console.log(produtos);
