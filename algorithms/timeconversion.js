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




