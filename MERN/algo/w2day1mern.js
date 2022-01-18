//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    var newstr = ""
    var laststr = ""
    for (var i=str.length-num; i<str.length; i++) {
        newstr+= str[i];
    }
    for ( var j=0; j<str.length - num; j++ ){
        laststr+= str[j]
    }
    return newstr + laststr
}


let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true

// // 1
// const isRotation = (str1, str2) => {
//     if(rotateString(str1) == str2){
//         return true
//     }
//     else{
//         return false
//     }
// }

// 2
const isRotation = (str1, str2) => {
    for(let i=str1.length; i>0; i--){
        // console.log(rotateString(str1, i));
        if(str2 == rotateString(str1, i)){
            return true
        }
    }
    return false;
}

// // 3
// function isRotated(string1, string2) 
// {
//     if(string1.length == string2.length && (string1+string1).indexOf(string2) != -1)
//     {
//         return true
//     }
//     return false
// }


console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));