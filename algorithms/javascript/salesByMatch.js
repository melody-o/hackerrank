// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3




function sockMerchant(n, ar) {
    // Write your code here
    //set a variable to 0 to return amount of pairs
    //create an object
    //iterate through array and create a nested array to create two pointers to compare each element
    //increment the key's value if element appears more than once
    //if key's value % 2 === 0, add one to the variable pairs
    //iterate through values
    //return amount of pairs

    let pairs = 0
    let obj = {}

     for (let i=0; i<ar.length; i++) {
        let sock = ar[i]
        let val = 0
        obj[sock] = val
        for (let j = 0; j < ar.length; j++) {
            let feet = ar[j]
        if (sock === feet) {
            val+=1
            obj[sock] = val
        }
        }
    }
        let arr = Object.values(obj)
        for (let value of arr) {
            pairs += Math.trunc(value / 2)

        }
    return pairs

}
