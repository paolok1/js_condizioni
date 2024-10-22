let presentazione = {
'nome' : 'Paolo',
'cognome' : 'Giuliani',
'età' : 47,
'saluta' : function() {
    return `Salve a tutti, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.età} anni. `;  
}
};

console.log(presentazione.saluta());
;

