const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers);

const squaredNumbersAlt = [];
for (let i = 0; i < numbers.length; i++) {
  squaredNumbersAlt.push(numbers[i] * numbers[i]);
}
console.log(squaredNumbersAlt);

const words = ["apple", "banana", "cat", "dog"];
const wordlengths = words
  .filter((word) => word.length > 3)
  .map((word) => word.length);
console.log(wordlengths);

const wordlengthsAlt = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 3) {
    wordlengthsAlt.push(words[i].length);
  }
}
console.log(wordlengthsAlt);

const students = [
  { name: "Tahir", marks: 80 },
  { name: "Adeel", marks: 45 },
  { name: "Ali", marks: 60 },
];
const passedStudents = students
  .filter((student) => student.marks >= 50)
  .map((student) => student.name);
console.log(passedStudents);

const passedStudentsAlt = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 50) {
    passedStudentsAlt.push(students[i].name);
  }
}
console.log(passedStudentsAlt);
