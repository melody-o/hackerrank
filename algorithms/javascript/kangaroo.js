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
