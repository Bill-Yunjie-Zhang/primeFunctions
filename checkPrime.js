const checkPrime = (num) => {
    if(num === 1 || num === 0) {
        return false
    }
    for (ii = 2; ii < num; ii ++){
        if (num % ii === 0) {
            return false
        }
    }
    return true
}
// console.log(checkPrime(541))

module.exports = checkPrime