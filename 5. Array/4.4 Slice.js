// =================== Slice ===================================================

/*
  * Retorna um array a partir de outro array
  * O array retornado é determinado pelos parâmetros que são 
    os indices de inicio e fim do novo array */

// sintaxe: .slice(inicio  , fim)
let numeros = [0,1,2,3,4,5]

    console.log(numeros.slice(2,3))
    console.log(numeros.slice(3)) // se não colocar indice final, ele executa até o final do array

    console.log(numeros.slice(3, -2))
