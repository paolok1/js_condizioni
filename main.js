let voto  = 18;
if (voto < 18 && voto >=0 ) {
 console.log("Insufficiente");
}else if (voto < 21 && voto >= 18 ) {
    console.log("Sufficiente");
}else if (voto >21 && voto <= 24 ) {
  console.log("Buono");
}else if (voto >24 && voto <=27 ) {
  console.log("Distinto");
}else if (voto > 27 && voto <= 29 ) {
    console.log("Ottimo");
}else if (voto ==30 ) {
    console.log("Eccellente");

}else{
    console.log("voto non valido");
}  