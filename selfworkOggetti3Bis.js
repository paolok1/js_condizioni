let bowling = {
'players' : [
    {'name' : 'Livio', 'scores' : [] },
    {'name' : 'Paola', 'scores' : []},
    {'name' : 'Filippo', 'scores' : []},
    {'name' : 'Giuseppe', 'scores' : []},

],

generaPunteggi : function() {
    this.players.forEach (player=> {
        for (let i = 0; i < 10; i++) {
       player.scores.push(Math.floor(Math.random() * 10) + 1 );
        }
    }) 

            
        },


            calcolaPunteggioFinale : function() {
        this.players.forEach(player => {
            player.punteggioFinale = player.scores.reduce((a, b) => a + b, 0);
        });
    },

    addNewPlayer : function player(nome) {
        let newPlayer = {'name' : 'Rocco', 'scores' : []}
        for (let i = 0; i < 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * 10 ) +1 );
            
        }
        this.players.push(newPlayer);
    },


    theWinnerIs : function(punteggio) {
        this.calcolaPunteggioFinale()
    this.players.sort((a, b) => b.punteggio - a.punteggio );
    return this.players[0];
    
    },
        
    } 
    
    bowling.generaPunteggi();
    bowling.addNewPlayer('Rocco');    
    console.log(bowling);
    let winner = bowling.theWinnerIs();
    console.log("Vincitore:", winner);
    bowling.calcolaPunteggioFinale();
    

       


