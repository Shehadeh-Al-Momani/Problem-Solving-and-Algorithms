
1) Sorting 
  * General Notes about types of sorting 
1.1. Selection Sort (in-place algorithm) :  
uses : when size of arrays are small .
Time Complexity O(n2) => Quadratic .
Space Complexity O(1) => Constant .

  function selectionSort(inputArr) { 
    let n = inputArr.length;        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

1.2 Bubble Sort (in-place algorithm) :  
uses : when we need get max number .
Time Complexity O(n2) => Quadratic .
Space Complexity O(1) => Constant .

function bubbleSort(inputArr) {
    let n = inputArr.length;
    let sorted = false;
        
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < n; i++){
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                sorted = false;
            }
        }
    }
    return inputArr;
}

1.3 Insertion Sort (in-place algorithm) :  
Insertion Sort is a simple, stable, in-place, comparison sorting algorithm. ( the most best from Selection and Bubble)
Time Complexity O(n2) => Quadratic .
Space Complexity O(1) => Constant .

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

1.4 Merge Sort : 