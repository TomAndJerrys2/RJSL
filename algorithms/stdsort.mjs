// Sorting Algorithms

// <-- Test Cases -->
const arr = [1, 4, 7, 2, 2, 5, 9];

// Time-Space Complexities of algorithms
// bubble sort => best-case: O(n^2) | average:
// selction sort => best-case: | average: 
// insertion sort => best-case: | average: 
// merge sort => best-case: | average:
// quick sort => best-case: | average: 
// radix sort => best-case: | average: 

// Bubble sort using Double pointers
// by comparing pairs or "bubbles" of elements and swapping depending
// on presedence i.e if the next element is less than the current element
export const bubbleSort = function(arr) {
    let len = arr.length;

    for(var ptr = 0; ptr < (len - 1); ptr++) {
        let swapped = false;

        for(var ptr2 = 0; ptr2 < (len - ptr - 1); ptr2++) {
            if(arr[ptr2] > arr[ptr2 + 1]) {
                arr[ptr2] = arr[ptr2 + 1];
                arr[ptr2 + 1] = arr[ptr2];

                swapped = true;
            }
        }

        if(!swapped)
            break;
    } 

    return arr;
}

// Selection Sort
// by moving the lowest values to the front of the unsorted array
export const selectionSort = function(arr) {
    let len = arr.length;

    for(var i = 0; i < (len - 1); i++) {
         let minIndex = i;
        
         for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex])
                minIndex = j;
         }

         // checking the position and changing the elements
         var element = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex] = element;
    }

    return arr;
}

export const mergeSort = function(arr) {

}

export const instertionSort = function(arr) {

}

export const quickSort = function(arr) {

}