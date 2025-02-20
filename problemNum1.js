function calculateVat(price){
    if(typeof price !== "number" || price < 0){
        return "Invalid"
    }

    let vat = price * 0.075;
    return vat;
}
