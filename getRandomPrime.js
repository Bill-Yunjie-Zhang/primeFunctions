const getRandomNum = require("./getRandomNum")
const checkPrime = require("./checkPrime")

const getRandomPrime = (low, high) => {
    let num = getRandomNum(low, high)
    let b = checkPrime(num)
    if (b) {
        return num
    } else {
        return getRandomNum(low, high)
    }
}

console.log(getRandomPrime(1, 10000000))