// String é uma sequência de caracteres.
const escola = "cod3r"
console.log(escola) // Retorna a string teste


console.log(escola.charAt(4)) // retorna um caractere
// se for uma letra que não está na palavra
// exemplo
console.log(escola.charAt(5)) // retorna um valor vazio

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d')) // -> Localização de um indice dentro da strig
console.log(escola.substring(1))// - retorna uma parte da string original, formando outra string
console.log(escola.substring(0,3)) // - > formato -> objeto.substring(ii, if) ii + indice inicial, if = indice final
console.log(escola.length) // -> quantos caracteres a variável possui
console.log(escola.toUpperCase()) // -> Converte todos os caracteres em maiúsculas
console.log(escola.toLowerCase())// -> converte todos os caracteres em minúsculas
console.log('Escola  '.concat(escola.concat("!")))
console.log(escola.replace(3, 'e')) // substituir um caractere
console.log('Ana,Maria,Pedro'.split(','))// divide as strings e retorna em um array

const teste = 'Leon@rdo'
console.log(teste.replace(4, 'u'))



function boolToWord(){
    let a = 'a'
    
    
    if(typeof a == String) {
      console.log('Yes')
    }else{
      console.log('No')
    }
  }

  console.log(boolToWord())



  
