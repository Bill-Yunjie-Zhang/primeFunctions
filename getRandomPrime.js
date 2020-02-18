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
// for(ii = 0; ii < 100; ii ++){
//     let a = getRandomPrime(1, 100)
//     if(a === 9){
//         console.log(a + " oh yeah")
//     }
// }
