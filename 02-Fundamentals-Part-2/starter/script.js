'use strict';

let hasDriverLicense = false;
const passTest = true;

function juiceProcessor(apple, banana) {
    const juice = apple + banana
    return console.log(`apple ${apple}, banana ${banana}`)
}

console.log(juiceProcessor(4, 5))