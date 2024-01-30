

//Rest Params

function sum(...numbers) { //pode passar qauntos parâmetros quiser
    return numbers.reduce((acumulador, num) => acumulador + num, 0)
}

console.log(sum(885,5525,90))

//========================================================================================

function teste (nome, idade, ...outros) {
    return ` Nome: ${nome} \n Idade: ${idade} \n Outras informações: ${outros}`
    }
    


console.log(teste("Leonardo", 24, 'Alto', 'Bonito'))