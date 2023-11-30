// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)


function miniMaxSum(arr) {
    let totalSum = 0;
    let minNum = Infinity;
    let maxNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];

        if (arr[i] < minNum) {
            minNum = arr[i];
        }
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    const minSum = totalSum - maxNum;
    const maxSum = totalSum - minNum;

    console.log(minSum, maxSum);
}

//mohammed's initial answer
// function miniMaxSum(arr) {
//     let minSum = 0
//     let maxSum = 0
//     let minNum = Infinity
//     let maxNum = -Infinity

//     for (let i = 0; i <arr.length; i++) {
//         if (arr[i] < minNum) {
//             minNum = arr[i]
//         }
//         if (arr[i] > maxNum) {
//             maxNum = arr[i]
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== minNum) {
//             maxSum += arr[j]
//         }
//         if (arr[j] !== maxNum) {
//             minSum += arr[j]
//         }

//     }
//     console.log(minSum, maxSum)

// }
