const valor = 'Global'

//Criação da função "minhaFuncao"
function minhaFuncao() {
    console.log(valor)
}

//Execução da função "minhaFuncao"
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
/* Vai executar a palavra "Global" porque a função carrega consigo
o local onde foi criada e não executada */