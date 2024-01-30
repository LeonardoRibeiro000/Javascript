//Destruturing com objetos
const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}
const {nome, idade } = pessoa /* Tirar o objeto "nome" e "pessoa da variável */
console.log(`${nome} com ${ idade}`)  // template string
console.log(nome)
console.log(idade)

const {nome: n, idade: i} = pessoa // mudar o nome da variável
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // tirar um atributo que não existe de dentro do objeto
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa // acessar atributo
console.log (logradouro, numero, cep)

