// Desafio map

const carrinho = [
  '{"nome": "borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 12.90}',
  '{"nome": "kit de lápis", "preco": 41.22}',
  '{"nome": "caneta", "preco": 7.50}',
];
// Retornar um array apenas com os preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;
const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

// tranformando string em json

//const json =  '{"result": true, "count": true}'
//const obj = JSON.parse(json)
//console.log(obj.result)
