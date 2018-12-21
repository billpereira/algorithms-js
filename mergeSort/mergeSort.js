// Done in 2 steps..
// First take an unsorted array and break untill multiple arrays of 1 element
// then split it in 2 halves
// Second take the multiple sorted arrays and merge till get one sorted array to return
//
//  O(nlogn) 
//

function mergeSort(arr){
    if (arr.length<2) return arr
    var middleIndex = Math.floor(arr.length/2)
    var firstHalf = arr.slice(0, middleIndex)
    var secondHalf = arr.slice(middleIndex)

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(arr1, arr2) {
    var result = []
    while(arr1.length && arr2.length){
        var minElem
        if (arr1[0] < arr2[0]) minElem = arr1.shift()
        else minElem = arr2.shift()
        result.push(minElem)
    }
    if (arr1.length) result = result.concat(arr1)
    else result = result.concat(arr2)
    return result
}

console.log(mergeSort([4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,100]))