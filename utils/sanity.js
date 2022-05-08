module.exports =  function trim (text){
    return text.trim().replace(/ /g, '').replace(/\t/g, '');
};