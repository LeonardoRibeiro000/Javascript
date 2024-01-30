// Métodos de string: trim -> Remove tudo o que não é string

//Evitar erros dos clientes

//ex: Usuário:      Matheus -> cliente coloca muitos espaços para digitar o nome

let nome = "      Matheus";
    console.log(nome)

let nomeCorrigido = nome.trim()
console.log(nomeCorrigido)