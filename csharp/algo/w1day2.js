// Binary Search
// Given a sorted array and a value, return whether the array contains that value.
// Do not sequentially iterate through the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.

function BinarySearch(Array, value){
    var left = 0
    var right =  Array.length - 1
    while(left <= right){
        var middle = Math.floor((left + right)/2)
        if(value === Array[middle]){
            return true
        }
        else if (Array[middle] > value){
            right = middle - 1
        }
        else {
            left = middle + 1
        }
    }
    return false
}
// Ex: Given [1,3,4,6,8,10] and 3, return true
// Ex: Given [2,6,8,10,14,16] and 12, return false

console.log(BinarySearch([1,3,4,6,8,10], 3))