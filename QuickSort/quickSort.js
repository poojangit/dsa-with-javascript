//Todo ----------QUICK SORT-------------------------

//^ Quick sort is a highly efficient, divide and conquer sorting algo
//^ It works by selecting a pivot element and partitioning the array into two sub array
//! Elements smaller than the pivot
//! Elements greater than the pivot

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const pivot = arr[arr.length-1]
    const left = []
    const right = []
    for(let i =0 ; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [2,4,1,6,7,8,9,3]
console.log(quickSort(arr));
