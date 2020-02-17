const checkPrime = (num) => {
    for (ii = 2; ii < num; ii ++){
        if (num % ii === 0) {
            return false
        }
    }
    return true
}
// console.log(checkPrime(541))

module.exports = checkPrime