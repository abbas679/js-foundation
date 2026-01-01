// 1. Primitive Types
let num = 42; // Number
let str = "Hello World"; // String
let bool = true; // Boolean
let undef; // undefined
let nul = null; // null
let bigIntNum = 12345678901234567890n; // BigInt
let sym = Symbol("id"); // Symbol

// Logging types
console.log("num:", num, "typeof:", typeof num);
console.log("str:", str, "typeof:", typeof str);
console.log("bool:", bool, "typeof:", typeof bool);
console.log("undef:", undef, "typeof:", typeof undef);
console.log("nul:", nul, "typeof:", typeof nul); // interesting quirk: typeof null === "object"
console.log("bigIntNum:", bigIntNum, "typeof:", typeof bigIntNum);
console.log("sym:", sym, "typeof:", typeof sym);

// 2. Array and Object
let arr = [1, 2, 3];
let obj = { name: "Tahir", age: 25 };

console.log(
  "arr:",
  arr,
  "typeof:",
  typeof arr,
  "Array.isArray:",
  Array.isArray(arr)
);
console.log(
  "obj:",
  obj,
  "typeof:",
  typeof obj,
  "Array.isArray:",
  Array.isArray(obj)
);

// 3. Dynamic Typing
let dynamicVar = 100;
console.log("dynamicVar:", dynamicVar, "typeof:", typeof dynamicVar);

dynamicVar = "Now I am a string";
console.log("dynamicVar:", dynamicVar, "typeof:", typeof dynamicVar);

dynamicVar = false;
console.log("dynamicVar:", dynamicVar, "typeof:", typeof dynamicVar);

// 4. Null vs Undefined
let a; // undefined
let b = null; // explicitly null

console.log("a:", a, "typeof:", typeof a); // undefined
console.log("b:", b, "typeof:", typeof b); // object (JS quirk)

console.log("a === undefined:", a === undefined); // true
console.log("b === null:", b === null); // true
console.log("a == b:", a == b); // true, because JS converts undefined and null loosely equal
console.log("a === b:", a === b); // false, strict equality
