/*
   Exercise 2 JavaScript code
*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = array.filter(number => number % 2 !== 0);
console.log(oddNumbers);

const numbersDivisibleBy2Or5 = array.filter(number => number % 2 === 0 || number % 5 === 0);
console.log(numbersDivisibleBy2Or5);

const numbersDivisibleBy3Squared = array.filter(number => number % 3 === 0).map(number => number * number);
console.log(numbersDivisibleBy3Squared);

const sumOfNumbersDivisibleBy5Squared = array.filter(number => number % 5 === 0).map(number => number * number).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfNumbersDivisibleBy5Squared);