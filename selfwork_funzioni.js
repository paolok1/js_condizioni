prompt ("Devi effettuare 3 tiri di dado");

function giocatoreUno(player_one) {

    let n = 3;

    let punteggio = 0;

    for (let i = 1; i <=n; i++) {
    
    let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    
    punteggio = punteggio + random;

    console.log(`Al tiro di dado numero ${i} del ${player_one} è uscito ${random} e quindi il punteggio adesso vale ${punteggio} `);
    
}

}

giocatoreUno("Giocatore 1");



prompt("Devi effettuare 3 tiri di dado");

function giocatoreDue(player_two) {

    let n = 3;

    let punteggio = 0;

    for (let i = 1; i <=n; i++) {
    
    let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    
    punteggio = punteggio + random;

    console.log(`Al tiro di dado numero ${i} del ${player_two} è uscito ${random} e quindi il punteggio adesso vale ${punteggio} `);
    
}

}

giocatoreDue("Giocatore 2");