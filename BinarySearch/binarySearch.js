//todo ----------------BINARY SEARCH------------------

//^ Binary search is a efficient algo for finding a target data within the sorted array
//^ Its a divide and conquer algorithm
//^ This algorithm works by maintaining two pointers

//* Iterative binary search

function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        const mid = Math.floor((left + right)/2)
        console.log(arr[mid])
        if(arr[mid] === target){
            return mid
        } else if(arr[mid] < target){
            left = mid + 1
        }
        else {
            right = mid + 1
        }
    }
    return -1
}
arr = [6,5,1,3,2]
// console.log(arr.length);

target = 3
const result = binarySearch(arr, target)
console.log(result);
