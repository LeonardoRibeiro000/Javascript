const linguagens = ['Javascript', 'C', 'Python', 'Java']
    let index = 0

    do {
        console.log(linguagens[index])
        index++
   }while (index < linguagens.length)

/* Diferente da estrutura While, o DO/WHILE não é necessário
atribuir um valor inicial para a variável opcao.*/


//========EXEMPLO COM WHILE=========================================
// Crio uma variável com valor 11
var valor = 11;

// Inicio o laço com a condição
while ( valor <= 10 ) {
	// Escrevo a variável valor na página
	console.log( valor );
	
	// Incremento a variável valor em 1 a cada volta do laço
	valor++;

    /*Agora o valor da variável count é 11, ou seja, 
    a condição count <= 10 vai retornar false porque o valor da 
    variável é maior que 10. Nesse caso, nosso laço não será executado.*/ 
} 
//========EXEMPLO COM DO WHILE=======================================

// Crio uma variável com valor 11
    var valor = 11;

// Inicio o laço com uma ação
        do {
	        // Escrevo a variável count na página
	            console.log( valor );
	
	                // Incremento a variável count em 1 a cada volta do laço
	                    valor++;
        } while ( valor <= 10 ) // Só agora verifico a condição