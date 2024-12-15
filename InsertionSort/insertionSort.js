//todo -------------INSERTION ORDER----------

//^ Its a sorting algorithm that builds the final sorted array one element at a time.
//^ It is similar to the way we sort playing cards in our hands.

function insertionSort(arr){
    let n = arr.length

    for(let i =1; i<n; i++){
        let current = arr[i]
        let j = i-1

        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}
let arr = [3,1,5,7,4]
console.log(insertionSort(arr))