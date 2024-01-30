// sintaxe padrão de IF, ELSE IF e ELSE
let carroLigado = true
 if(5>3) {
    console.log('Primeiro if é verdadeiro')
}else if(3>5) {
    console.log('O segundo if é falso')

}else { 
    console.log('Nenhum dos dois ifs são verdadeiros')
}

//==========================================================================

// exercício



Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('Quadro de honra')
    } else if(nota.entre(7,8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4,6.99)){
        console.log('Recuperação')

    }else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }else {
        console.log('Nota Inválida')
    }
}
    
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.55)
imprimirResultado(0)
imprimirResultado(2.3)
imprimirResultado(-1)
