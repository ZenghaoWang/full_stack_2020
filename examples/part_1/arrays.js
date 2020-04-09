// Arrays
const t = [1, -1, 3];
t.push(5);
console.log(t.length);
console.log(t[1]);

// For loop
t.forEach((value) => {
  console.log(value);
});

// In react code, it is preferable to use immutable data structures
// This creates a new array with 5 instead of changing t
const t2 = t.concat(5);

const t3 = [1, 2, 3];

// Creates a new array where each element is twice the old element
const m1 = t3.map((value) => value * 2);
console.log(m1);

// Transforms an array of integers into an array of HTML strings
const m2 = t3.map((value) => "<li>" + value + "</li>");
console.log(m2);

// Destructuring assignment: Assign individual items to variables
const t4 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t4;
console.log(first, second);
console.log(rest);
