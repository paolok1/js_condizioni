
 let str = "i topi non avevano nipoti"
let splitted =str.replace(/\W/g, "") ;
console.log(splitted);

if (str == splitted) {
    console.log(`True`);
    
}else{
console.log(`False`);
}

