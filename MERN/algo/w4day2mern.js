//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466

// const hexStrToDec = (str) => {
    
// }

function hexStrToDec(hex) {
    const hexValues = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15}
    let decimal = 0;
    let counter = 0;
    for (let i = hex.length - 1; i >= 0; i--) {
        // if hex[i] in hexValues, switch key for value
        if ( hex[i] in hexValues ) {

            decimal += hexValues[hex[i]] * Math.pow(16, counter);
            // console.log(hexValues[hex[i]] )/
        }
        else {
            decimal += hex[i] * Math.pow(16, counter);
        }
        
        counter++;
    }
    return decimal;
}

console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
console.log(hexStrToDec("3B5"));
console.log(hexStrToDec("FFF"));