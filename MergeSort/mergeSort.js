//todo -------------MERGE SORT-------------------

//^ Merge sort is a divide and conquer algo.
//^ This will splits an array into smaller subarrays, sorts them and then merges them back into a single sorted array
//^ Most efficient sorting algo for larger data sets

//^ Steps
//! Split the array - recursively split the array into halves until we have subarrays of size 1(base case)
//! Merge the sorted subarrays 

//^ Advantages 
//! No recursion or stack overflow issues
//! Slightly more space - efficient


//* Merge function
//! the merge function takes two sorted arrays and merges them into a single sorted array

function merge(left, right) {
    let result = []
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        }
        else {
            result.push(right[j])
        j++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while( j< right.length){
        result.push(right[j])
        j++
    }
    return result
}

//* Merge sort function

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRigt = mergeSort(right)

    return merge(sortedLeft, sortedRigt)
}

const arr = [38, 27, 43, 3, 9, 82, 10]
console.log(`Orinal : ${arr}` )
const sortArr = mergeSort(arr)
console.log(`Sorted : ${sortArr}`);

