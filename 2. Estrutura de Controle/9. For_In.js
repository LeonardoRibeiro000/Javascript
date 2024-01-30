// For/in
/* O laço for/in interage sobre as propriedades do objeto
na ordem original de sua inserção

-> sintaxe:
for (variável in objeto) {

}

variável -> uma propriedade diferente do objeto é atribuída em cada iteração
objeto -> Objeto com as propriedades enumeradas.

For/in interage com objetos criados a partir de construtores built-in (arrays e object)

for/in -> percorre os indices do array
*/
//============= EXEMPLO 1 / ARRAY ============================
const notas = [6.8, 9.9, 7.9, 6.0, 8.1 ] 
for (let i in notas){  // i = indice
    console.log(i, notas[i])
}

//============= EXEMPLO 2 / OBJETO ===========================

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64 
}

for(let atributo in pessoa) [
    console.log(`${atributo} = ${pessoa[atributo]}`)

]

const nums = [1,2,3,4,5,6]

for(let num in nums){
    console.log(num, nums)
}