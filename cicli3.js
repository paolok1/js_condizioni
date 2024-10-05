let scelta;

do{
    scelta = Number(prompt("Seleziona un numero per la bevanda da 1 a 3 \n 1 Acqua \n 2 Coca-cola \n 3 Birra")); 

    switch (scelta) {
        case 1:
            console.log("E' stata scelta l'Acqua");
            
            break;
        case 2:
            console.log("E' stata scelta la coca-cola");
                 
            break;
        case 3:
            console.log("E' stata scelta la Birra");
                     
            break;   
        default:
         console.log("La scelta inserita non è valida, riprova ");
         
        }
         
    }while ( scelta < 1 || scelta >3 ) ;

     
    




 
    
