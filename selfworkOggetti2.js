let nome= 'Giulietta';
let telefono = 55555444434;

let rubrica = {
    'contatti': [
        {'nome': 'Pluto', 'telefono': '3331111111'},
        {'nome': 'Pippo', 'telefono': '3332222222'},
        {'nome': 'Paperino', 'telefono': '3333333333'},
        {'nome': 'Robocop', 'telefono': '3334444444'}
    ],

    showAllContacts : function() {
       this.contatti.forEach( contatto => console.log(`${contatto.nome} : ${contatto.telefono}`));
        
    },

    showContact : function(contatto) {
        this.contatti.find(contatto)
    },

    modifyContact : function name(nome, telefono) {
       let contatto = this.contatti.find(contatto => contatto.nome == nome, telefono.telefono == telefono)
       let index = this.contatti.indexOf(contatto);
       if (contatto) {
        this.contatti.splice(index, 1)
        console.log('Contatto eliminato');

    }else{
        this.contatti.push({nome : nome, telefono : telefono})
        console.log('Contatto aggiunto');
        
    }
        

    },
}



rubrica.modifyContact(nome, telefono)
rubrica.showAllContacts()