// Matrix Search
// Given a 2-dimensional array and a smaller 2-dimensional array, return the location of the first match found, or [-1,-1] if no match is found
// Ex: given: 
// [ [12,1,4,19],
//   [3,4,11,17],
//   [18,72,2,10],
//   [9,15,32,16]]
// and 
// [ [11,17]
//   [2,10]]
// Return [1,2] (this is the location where the inner matrix begins)
var matrix = [[12, 1, 4, 19], [3, 4, 11, 17], [18, 72, 2, 10], [9, 15, 32, 16]]
var search = [[11, 17], [2, 10]]
// setup:
function matrixSearch(matrix, search) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == search[0][0]) {
                if (matrix[i][j + 1] == search[0][1] && matrix[i + 1][j] == search[1][0] && matrix[i + 1][j + 1] == search[1][1]) {
                    return [i, j]
                }
            }
        }
    }
    return [-1, -1]
}



function matrixSearchDynamic(matrix, search) {
    let first = search[0][0];
    for (let i = 0; i < matrix.length - search.length + 1; i++) {
        for (let j = 0; j < matrix[0].length - search[0].length + 1; j++) {
            if (matrix[i][j] == first) {
                let matching = true;
                for (let k = 0; k < search.length; k++) {
                    for (let l = 0; l < search[0].length; l++) {
                        if (search[k][l] !== matrix[i + k][j + l]) {
                            matching = false;
                        }
                    }
                }
                if (matching) return [i, j];
            }
        }
    }
    return [-1, -1]
}

console.log(matrixSearchDynamic(matrix, search))