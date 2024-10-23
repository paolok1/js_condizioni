let rubrica = {
    'contatti' : [
        ' Pluto : telefono 3324445432',
        ' Topolino : telefono 3334444132',
        ' Pippo : telefono  3344445555',
        ' Poldo : telefono 3354454545',
        ' Popeye : telefono 3364444333',
        ' Paperino : telefono 3314445678',

],
 mostraContatti : function() {
    rubrica.contatti.forEach((contatto) => console.log(contatto));
       
},

aggiungi_contatti : function(nome) {
    rubrica.contatti.push(nome);
},

rimuovi_contatto : function(nome_rimosso){
let index = rubrica.contatti.indexOf(nome_rimosso);
rubrica.contatti.splice(index, 1);
},

mostra_contatto_singolo : function(nome) {
    console.log(this.contatti[2]);
    
}



};
rubrica.mostraContatti();
rubrica.aggiungi_contatti('Goldrake : telefono 333233446821');
rubrica.rimuovi_contatto(' Topolino : telefono 3334444132');
console.log(rubrica);
rubrica.mostra_contatto_singolo([2])  
rubrica.contatti[3] = 'Gustavo : telefono 22332223323';  



