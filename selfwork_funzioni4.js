
//  let str = "i topi non avevano nipoti"
// let splitted =str.replace(/\W/g, "") ;
// console.log(splitted);

// if (str == splitted) {
//     console.log(`True`);
    
// }else{
// console.log(`False`);
// }


function controlString(stringa) {
    stringa = stringa.replace(/\W/g, "");

    let reversed = stringa.split(``).reverse().join(``);
    
    
    if (stringa == reversed) {
        return true;
        
    } else {
       return false; 
    }
}

console.log(controlString("i topi non avevano nipoti"));
 