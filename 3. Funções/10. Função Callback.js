/*
 Função callback: é uma função passada como parâmetro em outro função
 Na programação assíncrona, callbacks são passadas como funções 
 para serem executadas após um certo evento.
 */

function greeting(name) {
  console.log(`Olá, ${name}`);
}

function processUserInput(callback) {
  var name = "Por favor insira seu nome";
  callback(name);
}

processUserInput(greeting);


