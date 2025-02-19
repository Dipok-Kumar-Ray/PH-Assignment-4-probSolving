function calculateVat(price){
    if(typeof price !== "number" || price < 0){
        return "Invalid"
    }

    let vat = price * 0.075;
    return vat;
}
console.log(calculateVat(2000));
console.log(calculateVat(-55));
console.log(calculateVat("abcdef"));