const getRandomNum = require("./getRandomNum")
const checkPrime = require("./checkPrime")

const getRandomPrime = (low, high) => {
    let num = getRandomNum(low, high)
    let b = checkPrime(num)
    if (b) {
        return num
    } else {
        return getRandomPrime(low, high)
    }
}

// console.log(getRandomPrime(7, 10))

for(zz = 0; zz < 10; zz ++){
    console.log(zz + ": " + getRandomPrime(0, 10))
}