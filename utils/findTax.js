module.exports =  function findTax (arrayParams, doSplitting){
    if(!Array.isArray(doSplitting)){
        return false;
    }
    const findOne = arrayParams.every(value => doSplitting.includes(value.toString()));
    return findOne;
};