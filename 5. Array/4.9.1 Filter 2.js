const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.00, fragil: true},
    {nome: 'Copo de plástico', preco: 10.00, fragil: false}
]

        console.log(produtos.filter(function(p){
            return p.preco > 500 && p.fragil == true
}))