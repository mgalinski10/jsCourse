const marksMass = 78
const marksHeight = 1.69

const johnsMass = 92
const johnsHeight = 1.95

const marksBMI = marksMass / marksHeight ** 2
const johnsBMI = johnsMass / johnsHeight ** 2

const markHigherBMI = marksBMI > johnsBMI


// console.log("Marks's BMI" + ' ' + marksBMI)
console.log(johnsBMI)
console.log(markHigherBMI)
console.log("Mark's BMI" + ' ' + '(' + marksBMI + ')' + ' ' + "is higher than Johns's!" + ' ' + '(' + johnsBMI + ')')