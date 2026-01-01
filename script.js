let x = 10,
  y = 3;

// 1. Arithmetic Operations
console.log("Arithmetic Operations:");
console.log("x + y =", x + y); // Addition
console.log("x - y =", x - y); // Subtraction
console.log("x * y =", x * y); // Multiplication
console.log("x / y =", x / y); // Division
console.log("x % y =", x % y); // Modulus
console.log("x ** y =", x ** y); // Exponentiation
console.log("");

// 2. Assignment Operators
console.log("Assignment Operations:");
x += 5; // x = x + 5
console.log("x += 5 →", x);
x -= 2; // x = x - 2
console.log("x -= 2 →", x);
x *= 2; // x = x * 2
console.log("x *= 2 →", x);
x /= 3; // x = x / 3
console.log("x /= 3 →", x);
x %= 3; // x = x % 3
console.log("x %= 3 →", x);
console.log("");

// 3. Comparison
console.log("Comparison Operations:");
let a = 5,
  b = "5";
console.log("a == b →", a == b); // loose equality (true)
console.log("a === b →", a === b); // strict equality (false)
console.log("a != b →", a != b); // loose inequality (false)
console.log("a !== b →", a !== b); // strict inequality (true)
console.log("a > b →", a > b);
console.log("a < b →", a < b);
console.log("");

// 4. Logical Operators
console.log("Logical Operators:");
let age = 20,
  hasID = true;
console.log("age >= 18 && hasID →", age >= 18 && hasID); // AND
console.log("age < 18 || !hasID →", age < 18 || !hasID); // OR + NOT
console.log("!(age >= 18) →", !(age >= 18)); // NOT
console.log("");

// 5. Ternary Operator
console.log("Ternary Operator:");
let personAge = 16;
let status = personAge >= 18 ? "Adult" : "Minor";
console.log("Person age", personAge, "is", status);
console.log("");

// 6. Operator Precedence
console.log("Operator Precedence:");
let result1 = 10 + 5 * 2; // Multiplication before addition
let result2 = (10 + 5) * 2; // Parentheses first
console.log("10 + 5 * 2 =", result1);
console.log("(10 + 5) * 2 =", result2);

let complex = 5 + 10 * 2 > 20 && 3 + 2 === 5;
console.log("Complex expression 5 + 10 * 2 > 20 && (3 + 2 === 5) →", complex);
