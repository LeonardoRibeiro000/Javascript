/*
em JavaScript se usa a palavra-chave this como um atalho, um referente; ou seja, 
o sujeito no contexto ou o sujeito do código em execução.

*/

let person = {
    firstname: "Leonardo",
    lastname:"Ribeiro",
    showFullname: function() {
        console.log( this.firstname + ' ' + this.lastname);
    }
}
person.showFullname()