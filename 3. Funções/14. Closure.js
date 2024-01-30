// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas da função

//escopo léxico
const externo = () => {
    const book = 'Sapiens: Uma breve história da humanidade'

    const interno = () => {
        console.log(book.toUpperCase())
    }
    interno()
}

externo()

const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())