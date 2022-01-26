// // *** 1

// //combine two pre-sorted arrays into one sorted array
// //return the newly combined array
// //bonus challenge: combine in place into leftArr instead of a new array
// const combine = (leftArr, rightArr) => {
//     var temp = 0;
//     for(let i = 0 ; i < leftArr.length; i++){

//         for(let j = temp; j < rightArr.length; j++){
//             if (rightArr[j] < leftArr[i] ){
//                 // let index = i - 1
//                 leftArr.splice(i, 0, rightArr[j]); 
//             }
//             else if(rightArr[j] > leftArr[i]) {
//                 temp = j;
//                 break;
//             }
//         }
//     }
//     return leftArr;
// }

// // should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

// // should return [0,1]
// console.log(combine([1],[0]));

// // **** 2

// //combine two pre-sorted arrays into one sorted array
// //return the newly combined array
// //bonus challenge: combine in place into leftArr instead of a new array
// const combine = (leftArr, rightArr) => {
//     let result = [];
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             result.push(leftArr.shift())
//         } else {
//             result.push(rightArr.shift())
//         }
//     }
//     //  [...leftArr] [...rightArr]
//     return [...result,...leftArr, ...rightArr];
// }

// // should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

// // should return [0,1]
// // console.log(combine([1],[0]));


// *** 3

const combine = (leftArr, rightArr) => {
    for(var i = 0; i < rightArr.length; i++){
        leftArr.push(rightArr[i]);
    }
    // leftArr.push(...rightArr);
    for(var i = 0; i < leftArr.length; i++){
        for(var j = i + 1; j < leftArr.length; j++){
            if(leftArr[i] > leftArr[j]){
                temp = leftArr[i];
                leftArr[i] = leftArr[j];
                leftArr[j] = temp;
            }
        }
    }
    return leftArr;
}
console.log(combine([1,2,7,9],[0,3,4,6,11]));
console.log(combine([1],[0]));