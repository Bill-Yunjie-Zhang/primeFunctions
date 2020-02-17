const getPrime = (high) => {    
    let primeArray = []
    for (ii = 2; ii <= high; ii ++){
        primeArray.push(ii)
    }
    for (jj = 0; jj < primeArray.length; jj ++){
        for (kk = 0; kk < jj; kk ++){
            // console.log(primeArray + " " + primeArray[jj] + "%" + primeArray[kk])
            if (primeArray[jj] % primeArray[kk] === 0){
                // console.log("popout: " + primeArray[jj])
                primeArray.splice(jj, 1)
                jj -= 1
            }
        }
    }
    return primeArray
}

console.log(getPrime(10000))