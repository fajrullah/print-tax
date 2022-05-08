module.exports =  function taxParser (doSplitting){
    if(!Array.isArray(doSplitting)){
        return false;
    }
    const getTax = doSplitting[3];
    const taxAmount = getTax * 0.10;
    if(taxAmount > 0){
        return taxAmount;
    }
    return 0;
};