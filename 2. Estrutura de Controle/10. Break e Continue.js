/* Break;
    O comando “break” serve para encerrar a leitura. 
    O break é um comando que podemos utilizar quando queremos 
    parar/encerrar o laço de repetição na hora. 
    A instrução break interrompe o laço e 
    continua executando o código após o loop (se houver).

    Para o bloco e começa outro bloco se houver

*/
// Break no laço for/in
const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('Chupa pra ver se sai leite')

/*Continue
Com este comando, é possível iniciar a próxima repetição do loop. 
A instrução continue interrompe uma iteração (no laço de repetição)
, se uma condição específica ocorrer, 
e continua com a próxima iteração no laço de repetição.

Interrompe e pula para o próximo

*/
// Continue com o laço for/in

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Criação de rótulo

externo: for (a in nums) {
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }

}
console.log('Fim!')




