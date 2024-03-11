'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial. ${firstName}`;
      console.log(str);
    }

    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Michal';
calcAge(2004);

// console.log(x);

// const x = 'hello';

foo(); // "Hello, world!"

function foo() {
  console.log('Hello, world!');
}
