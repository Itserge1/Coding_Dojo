//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful

// ***** my solution
const isPangram = (str) => {
    let arr = [];
    for(let i= 0; i< str.length; i++){
        if (str[i].toUpperCase() >= "A" && str[i].toUpperCase() <= "Z"){
            let inside = true;
            for(let j= 0; j< arr.length; j++){
                if(arr[j].toUpperCase() == str[i].toUpperCase()){
                    inside = false;
                }
            }
            if(inside){
                arr.push(str[i].toUpperCase());
            }
        }
    }
    if(arr.length == 26){
        console.log(arr)
        return true;
    }
    else{
        console.log(arr)
        return false;
    }
}


// // **** 2
// const isPangram = (str) => {
//     const newStr = str.toUpperCase(); 
//     var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for(var i = 0; i < alph.length; i++){
//         var check = false;
//         // console.log(alph[i]);
//         for(var j = 0; j < newStr.length; j++){
//             // console.log(newStr[j]);
//             if(newStr[j] === alph[i]){
//                 check = true;
                
//             }
//         }
//         if(!check){
//             return false
//         }
        
//     }
//     return true;
// }

// // **** 3
// const isPangram = (str) => {
//     const letters = {};
//     const upper = upperCaseIt(str);

//     for(let i = 0; i < upper.length; ++i)
//         if(upper[i] >= 'A' && upper[i] <= 'Z')
//             letters[upper[i]] = true;

//     return Object.keys(letters).length === 26;
// }

// // ***** 4

// const isPangram = (str) => {
//     str = str.toUpperCase();
//     //  REGEx or...?
//     const alphabet = {};
//     // let char of str
//     // for(let i=0; i < str.length; i++){
//         for(let i of str){
//         if(i.match(/[A-Z]/)){
//             if(!alphabet[i]){
//                 // Add to Alphabet if it does not exist
//                 alphabet[i] = true;
//             }
//         }
//     }
//     return Object.keys(alphabet).length === 26;
// }

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
}

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
// console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
