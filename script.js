console.log("JavaScript is running");
console.log(2 + 3);
console.log("Hello " + "World");
console.log(typeof 42);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);

var x = 10;
console.log(x); // 10

var x = 20; // Redeclaration allowed
console.log(x); // 20

if (true) {
  var x = 30; // function/global scoped
  console.log(x); // 30
}
console.log(x); // 30 (overwritten!)
// Problem: var ignores block scope → leads to bugs. That’s why professionals mostly avoid it.

let y = 10;
y = 20; // ✅ Reassignment allowed
// let y = 30; // ❌ Redeclaration NOT allowed

if (true) {
  let y = 50; // ✅ Block scoped
  console.log(y); // 50
}
console.log(y); // 20 (outer y unaffected)

const z = 100;
// z = 200; // ❌ Cannot reassign

const person = { name: "Tahir" };
person.name = "Ali"; // ✅ Allowed! Object properties can change
console.log(person.name); // Ali

function test() {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log(a, b, c); // 1 2 3
}
test();
// console.log(a, b, c); // ❌ Error: not defined

console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ Error: Cannot access 'c' before initialization
const c = 30;
