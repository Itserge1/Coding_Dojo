//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    let lstorage = [];
    let word = '';
    for (let index = str.length - 1; index >= 0; index--) {
        if(lstorage.indexOf(str[index]) == -1)
        {
            lstorage.push(str[index]);
        }
    }
    for(let i = lstorage.length - 1; i >= 0; i--)
    {
        word+=lstorage[i];
    }
    return word;
}

const dedupe = (str) => {
    var newStr = "";
    var newStr2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let dupa = false;
        for (var j = 0; j < newStr.length; j++) {
            if (str[i] === newStr[j]) {
                dupa = true;
            }
        }
        if (!dupa) {
            newStr += str[i];
        }
        dupa = false;
    }
    for (let i = newStr.length - 1; i >= 0; i--) {
        newStr2 += newStr[i];
    }
    return newStr2;
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));