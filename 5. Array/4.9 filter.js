/*
O método filter() cria um novo array com todos os elementos que 
passaram no teste implementado pela função fornecida.

sintaxe :
         variável = array
             console.log(array.filter(elemento){
                return elemento (argumento)
                    })
                }) 
*/

//===================== exemplo 1 =============================
const valor = [12, 5, 4, 44, 80];
console.log(
  valor.filter(function (v) {
    return v <= 40; // retorna tudo o que for menor ou igual 40
  })
);

//===================== exemplo 2 =============================
const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ipad pro", preco: 4199, fragil: true },
  { nome: "copo de vidro", preco: 12.0, fragil: true },
  { nome: "Copo de plástico", preco: 10.0, fragil: false },
];
console.log(
  produtos.filter(function (p) {
    return p.preco > 500 && p.fragil == true;
  })
);

//====================== exemplo 3 ===========================

const pessoa = ["João", "Maatheus", "Ana"];
console.log(
  pessoa.filter(function (p) {
    return p.length <= 4;
  })
);
