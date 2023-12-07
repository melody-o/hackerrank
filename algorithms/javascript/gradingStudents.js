function gradingStudents(grades) {

    let rounded = [];

    for (let i =0; i < grades.length; i++) {
        let num;
        if (grades[i] > 37) num = Math.ceil(grades[i] / 5) * 5
        if (grades[i] < 38) rounded.push(grades[i])
        if (num - grades[i] <= 2) rounded.push(num)
        if (num - grades[i] > 2) rounded.push(grades[i])


    }
        console.log(rounded)
        return rounded
}
