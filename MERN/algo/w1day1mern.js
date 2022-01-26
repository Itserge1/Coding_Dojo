//runs through the arr and looks at two adjacent values at a time
//swaps the two adjacent values if the greater one comes first
//loops through the array many times until there is a perfect
//run with no swaps
function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        swapped = false;
        for(var i = 0; i < arr.length - 1; i++){
            // console.log(`${arr[i]}, ${arr[i+1]}`);
            if(arr[i] > arr[i+1]){
                swapped = true;

                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    
    return arr;
}


let arr = [5,4,2,6,8,14,1,3];
console.log(arr);
console.log(bubbleSort(arr));


//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for(var minStart = 0; minStart < arr.length; minStart++){
        var min = minStart;
        for(var i = min + 1; i < arr.length; i++){
            if(arr[min] > arr[i]){
                min = i;
            }
        }
        var temp = arr[min];
        arr[min] = arr[minStart];
        arr[minStart] = temp;

        console.log(arr);
    }
    
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));