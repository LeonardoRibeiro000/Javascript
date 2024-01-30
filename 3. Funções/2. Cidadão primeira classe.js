//===================== criar uma função de forma literal ================
function fun1() {} /*  1° function (palavra reservada)
                       2° nome da função
                       3° parâmetros
                       4° o que quer retornar
                       */

//===================== armazenar uma função em uma variável =============
const fun2 = function () {};

//======================= armazenar em um array ==========================
const array = [
  function (a, b) {
    return a + b;
  },
];
console.log(array[0](2, 3));

//=================== armazenar em um atributo de objeto =================
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

//======================= passar função como parametro ===================
// high order function - passar uma função como parâmetro em outra função 
function run(fun) {
  fun();
}
run(function () {
  console.log("Executando");
});

//============= uma função pode retornar/conter uma outra função =========
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(20, 30)(5);
