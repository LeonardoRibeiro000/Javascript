let nome = new String("Leonardo da Silva Ribeiro")
console.log(nome)

//método search
console.log(nome.search(/ribeiro/i)) // o "i"é um modificador e ignora maiúsculas e minúsculas

//Método Match
console.log(nome.match(/o/g)) //global: Faz a correspondência globalmente, ou seja, procura todas as ocorrências.

//Método replace
console.log(nome.replace("Ribeiro", "Oliveira"))

//Método Split()
const names = 'Leonardo,Bianca,David,Genivaldo'
console.log(names)
console.log(names.split(','))