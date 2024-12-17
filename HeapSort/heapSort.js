function heapSort(arr) {
    const n = arr.length;

    //! Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    //! Extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        //! Move the current root (maximum element) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        //! Heapify the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
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

    //! If the largest is not the root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        //! Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }w
}

const arr = [4, 2, 6, 8, 9, 1, 7];
const result = heapSort(arr);
console.log(result); 
