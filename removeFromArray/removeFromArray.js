function removeFromArray(array, ...args) {
    function isNot(num) {return (args.indexOf(num) == -1);}
    array = array.filter(isNot);
    return(array); 
}

module.exports = removeFromArray
