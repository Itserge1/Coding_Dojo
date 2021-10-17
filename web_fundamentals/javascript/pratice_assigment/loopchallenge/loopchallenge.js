// console.log('Print odds 1-20')
for (var i = 1; i <=20; i++) {
    if ( i % 2 == 0) {
        console.log(i)
    }
}

// console.log('Decreasing Multiples of 3')
for (var i = 100; i >=0; i--) {
    if ( i % 3 ==0) {
        console.log(i)
    }
}

// console.log('Print the sequence')
for ( var i = 4; i > -4; i = i - 1.5) {
    console.log(i)
}

// console.log('Sigma')
var x = 1
for (var i = 2; i <= 100; i++) {
    x = x + i
}
var sum = x
console.log(sum)

// console.log('Factorial')
var x = 1
for (var i = 2; i <= 12; i++) {
    x = x * i
}
var product = x
console.log(product)

