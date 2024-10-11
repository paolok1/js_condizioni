// Non riesco a far stampare il risultato finale con il verdetto di vittoria


function playGames(tiri) {
   let player1 = 0;
   let player2 = 0;
   
   for (let i = 0; i <= tiri ; i++) {
    let player1Rules = Math.floor(Math.random() * 6 ) + 1;
    
    console.log(`Al tiro ${i} il giocatore 1 ha ottenuto il punteggio di ${player1}`);
    
    let player2Rules = Math.floor(Math.random() * 6 ) + 1;

    console.log(`Al tiro ${i} il giocatore 2 ha ottenuto il punteggio di ${player2}`);

    player1 = player1 + player1Rules;
    player2 = player2 + player2Rules;
   }
   
   if (player1 > player2) {
    return `Il giocatore 1 ha vinto con un punteggio pari a ${player1} `
   }else if (player2 > player1){
    return `Il giocatore 2 ha vinto con un punteggio pari a ${player2}`
   }else{
    return `I giocatori hanno pareggiato con un punteggio pari a ${player1}`
   }   

}
        
 let tiri = Number(prompt ("Quanti tiri devono effettuare i giocatori?"));      
        
 let result = playGames(tiri);       
        
 console.log(result);
  
        
    
        
    




















