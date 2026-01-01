let firstName = "Tahir";
let lastName = "Abbas";

// 1. Concatenation using +
let fullName1 = firstName + " " + lastName;
console.log("Full name using + :", fullName1);

// 2. Template literals
let fullName2 = `${firstName} ${lastName}`;
console.log("Full name using template literals:", fullName2);

// 3. String methods
console.log("Full name length:", fullName2.length); // .length
console.log("Uppercase full name:", fullName2.toUpperCase()); // .toUpperCase()
console.log("First name using slice:", fullName2.slice(0, firstName.length)); // .slice()
console.log("Does full name include 'a'? :", fullName2.includes("a")); // .includes()

// 4. Multi-line message using template literals
let message = `Hello ${firstName},

Welcome to our platform. 
We are glad to have you here.

Best regards,
The Team`;
console.log("\nMulti-line message:\n", message);

// 5. Combine strings and numbers using template literals
let age = 25;
let professionalMessage = `${fullName2} is ${age} years old and a skilled software engineer.`;
console.log("\nString + number message:", professionalMessage);
