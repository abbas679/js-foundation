const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const squaredNumbers = evenNumbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [4, 16, 36, 64, 100]

const sumOfSquares = squaredNumbers.reduce((acc, num) => acc + num, 0);

console.log(sumOfSquares); // Output: 220

const employees = [
  { name: "Tahir", salary: 5000 },
  { name: "Adeel", salary: 4000 },
  { name: "Ali", salary: 6000 },
];

const raisedSalaries = employees.map((employee) => {
  return { ...employee, salary: employee.salary * 1.1 };
});

console.log(raisedSalaries);
// Output:
// [
//   { name: "Tahir", salary: 5500 },
//   { name: "Adeel", salary: 4400 },
//   { name: "Ali", salary: 6600 }
// ]

const keepHighEarners = raisedSalaries.filter(
  (employee) => employee.salary > 4500
);
console.log(keepHighEarners);
// Output:
// [
//   { name: "Tahir", salary: 5500 },
//   { name: "Ali", salary: 6600 }
// ]
const onlyNames = employees.reduce(
  (acc, employee) => [...acc, employee.name],
  []
);
console.log(onlyNames); // Output: ["Tahir", "Adeel", "Ali"]
