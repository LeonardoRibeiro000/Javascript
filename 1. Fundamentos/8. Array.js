const valores = [7.7, 8.9, 6.3, 9.2] //array = objeto de alto nível semelhante a lista

console.log(valores[0], valores[3])// se dar por meio de colchetes []
valores[4] = 10

console.log(valores[4], valores [3]) // 10 , 9.2
console.log(valores.length) // quantos elementos tem no array

valores.push({id: 3}, false, null , 'teste')  // adiciona outros elementos
console.log(valores)

console.log(valores.pop('teste')) // retira um elemento do array
// delete valores[] => também deleta um elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores) // object


