// Remove duplicates
// Given a sorted array of integers, remove all duplicates from the array and return an array that does not contain duplicates (okay to make a new array)

// Ex: given [1,1,1,2,3,3,4] > return [1,2,3,4]
// Ex: given [2,2,3,4,4,4] > return [2,3,4]

function SortArray(Arr){
    newArr = []
    for(var i = 0; i < Arr.length ; i++ ){
        if(Arr[i] != newArr[newArr.length - 1]){
            newArr.push(Arr[i])
        }
    }
    return newArr
}

console.log(SortArray([1,1,1,2,3,3,4]))

// New Aswer

const removeDupe = (arr) => {
    const set = new Set();
    let i = 0;
    while (i !== arr.length) {
        if (set.has(arr[i])) {
            arr.splice(i, 1);
        } else {
            set.add(arr[i]);
            i++;
        }
    }
    return arr;
};

console.log(removeDupe([1, 6, 6, 6, 6, 6, 61, 1, 3, 3, 4, 5, 5, 5, 6, 9, 9]));

// Challenge one: How would you do this with an unsorted array?
// Challenge two: try to do this WITHOUT making a new array! (Also known as in place)

function removeDuplicates(arr){
    for(i=0;i<arr.length;i++){
        let num = arr[i];
        for(j=i+1;j<arr.length;j++){
            if(arr[j] == num){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

console.log(removeDuplicates([1,1,1,4,8,6,8,2,3,6,0,1,4]));

// Slpice function
var arr = [1,2,3,4,5];

function mySplice(arr, idx, valsToRem){
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+valsToRem];
    }
    arr.length = arr.length - valsToRem;
    return arr;
}

console.log(mySplice(arr, 1, 2));