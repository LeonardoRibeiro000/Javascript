// Imprimir Meu nome é João usando função construtora
function pessoa (nome) {
    this.nome = nome 
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new pessoa('João')
p1.falar()




