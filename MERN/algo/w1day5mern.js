//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    var read = false
    var word = ""
    var arr = []
    for(var i=0; i < str.length; i++) { 
        if (str[i] != " "){
            // read = true
            word += str[i];
        }
        else{
            if (word){
                arr.push(word)
                // arr = [word, ...arr]
                word = ""
                // read = false
            }
        }
    }
    if (word){
        arr.push(word)
    }
    return arr
}

// console.log(stringToWordArray("Did I shine my shoes today?"));
// console.log(stringToWordArray("Did I shine my shoes today?      "));
// console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    var string = "";
    var newArr =stringToWordArray(str)
    for (var i=newArr.length -1 ; i >= 0; i--){
        string += `${newArr[i]} ` 
    }
    return string
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));