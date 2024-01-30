//=================== Chamada de uma função ==========================================

//com return
function soma(a, b) {
  return a + b;
}
console.log(soma(3, 4)); // precisa do console.log()

// sem return
function subtracao(x, y) {
  console.log(x - y);
}
subtracao(10, 5); // não precisa do console.log() somente chamar pelo nome da função

//============================= Exercicio ===============================================
function area(largura, altura) {
  const area = Math.floor(largura * altura);
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}
console.log(area(2.7, 3));

