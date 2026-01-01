// My favorite fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

console.log("Original array:", fruits);

// 1. Access first, last, and middle elements
const firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];
const middleFruit = fruits[Math.floor(fruits.length / 2)];

console.log("First fruit:", firstFruit);
console.log("Middle fruit:", middleFruit);
console.log("Last fruit:", lastFruit);

// 2. Add and Remove fruits
fruits.unshift("Strawberry"); // add at start
fruits.push("Grapes"); // add at end
console.log("After adding fruits:", fruits);

fruits.shift(); // remove from start
fruits.pop(); // remove from end
console.log("After removing fruits:", fruits);

// 3. Subarray using slice
const citrusFruits = fruits.slice(2, 4); // from index 2 to 3 (4 not included)
console.log("Subarray (slice):", citrusFruits);

// 4. Search
console.log("Does array include 'Mango'? :", fruits.includes("Mango"));
console.log("Index of 'Banana':", fruits.indexOf("Banana"));

// 5. Looping through array
console.log("Loop using for:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Loop using for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("Loop using forEach:");
fruits.forEach((fruit) => console.log(fruit));

// 6. Transform array
// map → uppercase
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase fruits:", upperFruits);

// filter → fruits with length > 5
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with length > 5:", longFruits);

// reduce → total length of all fruit names
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("Total length of all fruit names:", totalLength);
