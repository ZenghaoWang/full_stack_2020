// Defining an arrow function
const sum = (x, y) => {
  console.log(x);
  console.log(y);
  return x + y;
};

let result = sum(1, 5);
console.log(result);

// If there is only one paramter, we don't need parentheses
const square = (p) => {
  console.log(p);
  return p * p;
};

// If the function only contains 1 expression, we don't need braces
const cube = (p) => p * p * p;

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
console.log(t, tSquared);

// Another way of defining functions: function keyword
// 1. function declaration
function product(a, b) {
  return a * b;
}

result = product(2, 6);

// 2. Function expression
const average = function (a, b) {
  return (a + b) / 2;
};

result = average(2, 5);
