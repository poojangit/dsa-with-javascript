function heapSort(arr) {
    const n = arr.length; //!get the length of the array

    //* Building a max heap
    //! start from the last leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    //! Extracting elements from the heap
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0]
        arr[0] = arr[i] //! swap the root ele with the last ele of the heap
        arr[i] = temp
        heapify(arr, i, 0) //! restore the max heap property for the remaining elements 
    }
    return arr;
}

function heapify(arr, n, i) { //! i is the current node being heapified
    let largest = i; //! Initialize largest as root
    const left = 2 * i + 1; //! Left child index
    const right = 2 * i + 2; //! Right child index

    //! If the left child is larger than the root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    //! If the right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    //* heap sort process
    //! If the largest is not the root, swap and continue heapifying
    if (largest !== i) {
        // [arr[i], arr[largest]] = [arr[largest], arr[i]];
        let swap = arr[i]
        arr[i] = arr[largest]
        arr[largest] = swap

        //! Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

const arr = [4, 2, 6, 8, 9, 1, 7, 3];
const result = heapSort(arr);
console.log(result); 
