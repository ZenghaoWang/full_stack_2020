// Defining object literals: List properties in braces
const object1 = {
  name: "zenghao wang",
  age: 20,
  education: "Bachelors",
};

const object2 = {
  name: "Full stack development",
  level: "intermediate studies",
  size: 5,
};

// Nested objects
const object3 = {
  name: {
    first: "dan",
    last: "abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford university",
};

console.log(object1.name);
console.log(object1["age"]);

// Can add properties to object using dot or bracket notation
object1.address = "Toronto";
// This has to be done using bracket notation
object1["secret number"] = 69;
console.log(object1.address);
