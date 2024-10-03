
// Array per memorizzare i numeri dispari
let numeriDispari =[];

// Stampa i numeri pari da 1 a 20 e memorizza i numeri dispari
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i); // Stampa i numeri pari
  } else {
    numeriDispari.push(i); // Memorizza i numeri dispari
  }
}

// Calcola la media dei numeri dispari
let sommaDispari = numeriDispari.reduce((acc, num) => acc + num, 0);
let mediaDispari = sommaDispari / numeriDispari.length;

// Stampa la media dei numeri dispari
console.log("La media dei numeri dispari è: " + mediaDispari);



