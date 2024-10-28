// let bowling = {
//     'players': [
//         {'name': 'Livio', 'scores': []},
//         {'name': 'Paola', 'scores': []},
//         {'name': 'Filippo', 'scores': []},
//         {'name': 'Giuseppe', 'scores': []},
//     ],

//     generaPunteggi : function (punteggio) {
    
//         this.players.forEach(player => {
//             for (let i = 0; i < 10; i++) {
//                 player.scores.push(Math.floor(Math.random() * 10) + 1 );
                
//             }
//         });
    
//     },

//     calcolaPunteggioFinale : function() {
//         this.players.forEach(player => {
//             player.punteggioFinale = player.scores.reduce((a, b) => a + b, 0);
//         });
//     },

//     addNewPlayer : function(nome) {
//         let newPlayer = { name : 'Roberta', scores : []};
//         for (let i = 0; i < 10; i++) {
//             newPlayer.scores.push(Math.floor(Math.random() * 10) + 1);
//         }
//         this.players.push(newPlayer);
//     },

//     determineWinner: function() {
//         this.calcolaPunteggioFinale();
//         this.players.sort((a, b) => b.punteggioFinale - a.punteggioFinale);
//         return this.players[0];
//     },

//     getRanking: function() {
//         this.calcolaPunteggioFinale();
//         return this.players.sort((a, b) => b.punteggioFinale - a.punteggioFinale);
//     }
// };


// bowling.calcolaPunteggioFinale();
// console.log("Punteggi generati:", bowling.players);

// bowling.addNewPlayer();
// console.log("Nuovo giocatore aggiunto:", bowling.players);

// let winner = bowling.determineWinner();
// console.log("Vincitore:", winner);

// let ranking = bowling.getRanking();
// console.log("Classifica finale:", ranking);

