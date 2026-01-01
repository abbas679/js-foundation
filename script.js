// 1. Create object
const person = {
  firstName: "Tahir",
  lastName: "Abbas",
  age: 25,
  isStudent: true,
  hobbies: ["Reading", "Gaming", "Boating"],

  // Method to return full name
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Original person object:", person);

// 2. Access properties
console.log("Access using dot notation:");
console.log(person.firstName);
console.log(person.age);

console.log("Access using bracket notation:");
console.log(person["lastName"]);
console.log(person["hobbies"]);

// 3. Update age and add country
person.age = 26;
person.country = "Pakistan";
console.log("After update and add country:", person);

// 4. Delete isStudent
delete person.isStudent;
console.log("After deleting isStudent:", person);

// 5. Use method fullName()
console.log("Full name using method:", person.fullName());

// 6. Loop through all properties
console.log("Looping through properties:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

// 7. Destructuring
const { firstName, hobbies } = person;
console.log("Destructured firstName:", firstName);
console.log("Destructured hobbies:", hobbies);
