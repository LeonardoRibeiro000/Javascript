let feiradeCasa = ['Arroz', 
                    'Feijão', 
                    'Macarrão', 
                    'Carne', 
                    'Ovos', 
                    'Tapioca', 
                    'Queijo']

 feiradeCasa.forEach(nome => console.log(nome))   // arrow function
 
 
 feiradeCasa.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)    
 })

