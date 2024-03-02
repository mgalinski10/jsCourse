'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// function juiceProcessor(apple, banana) {
//     const juice = apple + banana
//     return console.log(`apple ${apple}, banana ${banana}`)
// }

// console.log(juiceProcessor(4, 5))

// function calcAge1(birthYear) {
//     const age = 2024 - birthYear;
//     return age;
// }

// function isAdult(birthYear) {
//     const age = calcAge1(birthYear); // Poprawne wywołanie funkcji calcAge1 i przechowanie wyniku w zmiennej age
//     if (age >= 18) { // Użyj zmiennej age do porównania z 18
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isAdult(2004)); // Wywołanie funkcji isAdult z rokiem urodzenia 2004

const jonas = {
    firstName: 'Michal',
    lastName: 'Galinski',
    age: 2024 - 2004,
    job: 'CEO',
    friends: ['Michael', 'Ola', 'Steven']
};

// console.log(jonas)

console.log(jonas.lastName)

console.log(`Jonas has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}.}`)

const mark = {
    fullName: 'Mark Zuckenberg',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        return this.mass / (this.height * this.height)
    }
};

const john = {
    fullName: 'John Zuckenberg',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        return this.mass / (this.height * this.height)
    }
};

console.log(john.calcBmi());
console.log(mark.calcBmi());

function recursion(n) {
    console.log(`Powtórzenie numer: `)
    return
}