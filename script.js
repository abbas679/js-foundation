const prices = [100, 200, 300];
const taxRate = prices.map((price) => {
  return price * 1.1;
});
console.log(taxRate);

const students = [
  { name: "Tahir", marks: 80 },
  { name: "Adeel", marks: 45 },
  { name: "Ali", marks: 60 },
];

const results = students.map((student) => ({
  name: student.name,
  result: student.marks >= 50 ? "Pass" : "Fail",
}));

console.log(results);
