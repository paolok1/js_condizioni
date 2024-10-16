
    
    
    let array  = [3, 5, 10, 2, 8];
    let somma = array.reduce((acc, n)=> acc + n);
    console.log(somma);
    
    let media = somma / array.length;
    console.log(media);
    
    let valoriMinori = array.filter((numero)=> numero < media);
    console.log(valoriMinori);
    console.log(`La media è = ${media}, i valori minori sono = ${valoriMinori}`);
    
    
    


    
    
    






