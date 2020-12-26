console.log('Problem Solving Q:24 ');

/* findBubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element
of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
/*
Examples:
bubbleSort([2, 1, 3, 7]) // => [7, 3, 2, 1]
bubbleSort([0, 2, 3]) // => [3, 2, 0]
bubbleSort([2, 3, 5]) // => [5, 3, 2]
bubbleSort([1, 3, 5, 4, 2]) // => [5, 4, 3, 2, 1]
*/