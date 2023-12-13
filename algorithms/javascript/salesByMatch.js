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
