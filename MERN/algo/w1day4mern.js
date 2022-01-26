const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    console.log(arr)
    if(arr.length <2){
        return arr;
    }
    const pivi = partition(arr);
    // console.log(arr)
    // console.log(pivi)
    
    let leftarr = arr.slice(0, pivi)
    // console.log(leftarr)
    let rigtharr = arr.slice(pivi + 1, arr.length)
    // console.log(rigtharr)

    // recursion
    leftarr = quickSort(leftarr);
    rigtharr = quickSort(rigtharr);

    // concatinate
    // return [...leftarr, arr[pivi], ...rigtharr]
    const newarr = leftarr.concat(arr[pivi], rigtharr)
    return newarr;

}

console.log(quickSort([7,45,2,67,3,2,1]));