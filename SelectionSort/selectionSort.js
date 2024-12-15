//todo ------------SELECTION SORT---------------------

//^ Selection sor is a simple comparision-based sorting algo
//^ It divides the arry into two parts- sorted and unsorted sections
//^ The algo repeatedly selects the smallest(or largest, depending on the order) element from the unsorted portion and swaps it with the first element of the unsorted portion

//^ Start with the first element of the array
//^ Find the smallest element from the unsorted portion of the array
//^ swap the smallest element with first element of the unsorted portion
//^ move the boundary of the sorted portion one element forward
//^ repeat the process untill the entire array is sorted

function selectionSort(arr) {
    let n = arr.length
    for (i = 0; i < n - 1; i++) {
        let midInx = i
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[midInx]) {
                midInx = j //! Update minIndex if smaller element is found
            }
        }
        if(midInx !== i){
            [arr[i], arr[midInx]] = [arr[midInx], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([4,2,10,6,7,3]))