function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isPositive(n) {
  return parseInt(n) > 0;
}

// Function that validates that a given string is both a number and is positive
// The way to create arbitrarily complex validators out of simple ones
const combine = (...fns) => (val) => fns.reduce((memo, fn) => memo && fn(val), true);

const combined = combine(isNumeric, isPositive);

console.log(combined('5')); // true
console.log(combined('0')); // false
console.log(combined('5g')); // false

// Higher-order validator function
function lessThan5(n) {
    return parseInt(n) < 5;
}

const evenMoreCombined = combine(combined, lessThan5);
console.log(evenMoreCombined('4')) // true
console.log(evenMoreCombined('5')); // false
console.log(evenMoreCombined('6')); // false
console.log(combined('0')); // false
console.log(combined('5g')); // false
