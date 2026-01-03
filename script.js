const ages = [12, 18, 25, 14, 30];
const isAdult = ages.filter((age) => age >= 18);
console.log(isAdult); // Output: [18, 25, 30]

const products = [
  { name: "Laptop", price: 900 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];

const affordableProducts = products.filter((product) => product.price < 500);
console.log(affordableProducts);

const users = [
  { name: "Tahir", active: true },
  { name: "Adeel", active: false },
  { name: "Ali", active: true },
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers.map((user) => user.name));
