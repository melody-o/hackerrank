// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe.



function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positive += 1;
      } else if (arr[i] < 0) {
        negative += 1;
      } else {
        zero += 1;
      }
    }

    let length = arr.length;
    let pos = (positive / length).toFixed(6);
    let neg = (negative / length).toFixed(6);
    let zer = (zero / length).toFixed(6);

    let result = [pos, neg, zer];

    result.forEach((e) => {
      console.log(e);
    });
  }
