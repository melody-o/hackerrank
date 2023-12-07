// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).





function timeConversion(s) {
    // Write your code here
    //split our string to check if last two are AM or PM
    //if its PM we just add 12
    //edge case bc we can't have 24 if it's PM & its 12 leave as it
    //edge case if its 12 and am add 00 to the front
    //returning as a string without AM/PM at the end

    let result = ""
    let index;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "P" || s[i] === "A") {
            index = i
        }
    }
    let sliced = s.slice(index)
    let hour = s.slice(0,2)
    let remain = s.slice(2,index)
    let time;

    if (sliced === "PM" && hour != 12) {
       time= Number(hour)+ 12
       let stringify = parseInt(time)
       result = stringify+ remain
       console.log(stringify)
    } else {
        result = hour + remain
    }
    if (sliced === "AM" && hour == 12) {
        time = "00"
        result = time + remain
    }




    return result
}



// function timeConversion(s) {
//     const period = s.slice(-2);
//     let hour = parseInt(s.slice(0, 2));

//     if (period === "PM" && hour !== 12) {
//         hour += 12;
//     } else if (period === "AM" && hour === 12) {
//         hour = 0;
//     }

//     if (hour < 10) {
//         hour = "0" + hour;
//     }

//     const result = hour + s.slice(2, -2);

//     return result;
// }
