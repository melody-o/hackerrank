// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Example




// After one jump, they are both at , (, ), so the answer is YES.

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO


// function kangaroo(x1, v1, x2, v2) {

//     if (v1 === v2 && x1 === x2) {
//         return "YES";
//     }
//     if (v1 !== v2 && (x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
//         return "YES";
//     }
//     else {
//         return "NO";
//     }
// }

function kangaroo(x1, v1, x2, v2) {
    // Check if the kangaroos have different jump distances
    const haveDifferentJumpDistances = v1 !== v2;

    // Check if the relative distance is divisible evenly by the relative speed
    const relativeDistanceIsDivisible = (x2 - x1) % (v1 - v2) === 0;

    // Check if the number of jumps required is non-negative
    const numberOfJumpsIsNonNegative = (x2 - x1) / (v1 - v2) >= 0;

    // Check if all conditions are true
    if (haveDifferentJumpDistances && relativeDistanceIsDivisible && numberOfJumpsIsNonNegative) {
        return "YES"; // Kangaroos will meet
    } else {
        return "NO"; // Kangaroos will not meet
    }
}
