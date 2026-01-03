const handleUser = (name, callback) => {
  callback(name);
};

// Call 1: Welcome message
handleUser("Adeel", (name) => {
  console.log(`Welcome, ${name}!`);
});

// Call 2: Uppercase name
handleUser("Adeel", (name) => {
  console.log(name.toUpperCase());
});

// Call 3: Name length
handleUser("Adeel", (name) => {
  console.log(name.length);
});

const calculate = (num1, num2, operation) => {
  return operation(num1, num2);
};

// Call 1: Addition
const sum = calculate(5, 3, (a, b) => a + b);
console.log(`Sum: ${sum}`);
// Call 2: Multiplication
const product = calculate(5, 3, (a, b) => a * b);
console.log(`Product: ${product}`);
// Call 3: Subtraction
const difference = calculate(5, 3, (a, b) => a - b);
console.log(`Difference: ${difference}`);

const myMap = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
};

// Test 1: Double numbers
const numbers = [1, 2, 3, 4];
const doubled = myMap(numbers, (n) => n * 2);
console.log(doubled);

// Test 2: Convert to strings
const stringified = myMap(numbers, (n) => `Number: ${n}`);
console.log(stringified);

const orderFood = (food, afterOrder) => {
  console.log(`Order placed for ${food}`);
  afterOrder(food);
};

// Cooking callback
orderFood("Pizza", (food) => {
  console.log(`${food} is being cooked`);
});

// Delivery callback
orderFood("Burger", (food) => {
  console.log(`${food} is out for delivery`);
});

const greet = (name) => {
  return "Hello " + name;
};

console.log(greet("Adeel"));

const square = (n) => n * n;

console.log(square(6));
