const parseInt2 = (str) => {
    let num = 0;
    for(let i = 0; i < str.length; ++i)
        num += (str.charCodeAt(i) - 48) * (10 ** (str.length - 1 - i));
    return num;
}

//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok

// ****** 1
const encode = (str) => {
    var count = 1;
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else {
                newStr = newStr + str[i] + count++
                count = 1;
            }
    }return newStr
}

// ****** 2

// const encode = (str) => {
//     var count = 0
//     var newStr = ""
//     var lastStr = ""
//     var letStr = ""
//     for(let i= 0; i< str.length; i++){
//         if(newStr.length == 0){
//             newStr = str[i]
//             letStr = str[i]
//             count++
//         }
//         if(str[i]== newStr){
//             newStr+= str[i]
//             if(letStr == str[i]){
//                 letStr = letStr
//             }
//             else{
//                 letStr = str[i]
//             }
//             count++
//         }
//         else{
//             lastStr += letStr + count
//             newStr = str[i]
//         }
//     }
//     return lastStr
// }

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
            
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));