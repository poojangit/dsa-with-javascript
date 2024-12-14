//todo --------Bubble sort---------------------

//^ Bubble sort compares the adjacent elements and swaps them if they are in the wrong order
//^ This process repeats until the array is sorted

//^ Starting with the first element, the algorithm compares the current element to the next element in the array
//^ if the current element is greater than the next element, they are swapped
//^ the process continues for all adjacent elements in the array.after one full pass through the array, element will bubble to the end
//^ the algorithm then reapeats the process for the rest of the unsorted array(ignoring the last element)
//^ This continues untill no more swaps are required
//^ Finally the array will get fully sorted

function bubbleSort(arr){
    let n = arr.length
    for(let i=0; i<n-1; i++){
        let swapped = false
        //! comparing with adjacent elements
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
            }
        }
        if(!swapped)
          break
    } 
    return arr
}
let arr = [1,3,2,5,6,7,9,6,6]
console.log(bubbleSort(arr))