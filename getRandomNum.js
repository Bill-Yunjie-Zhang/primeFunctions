const getRandomNumber = (low, high) => {
    min = Math.ceil(low);
    max = Math.floor(high);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(0, 100))
// let a = []
// for (ii = 0; ii < 100; ii++){
//     a.push(getRandomNumber(0, 100))
// }
// console.log(a.findIndex(e => e === 0))