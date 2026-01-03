const nums = [10, 20, 30];

const total = nums.reduce((accumtulator, currentValue) => {
  return accumtulator + currentValue;
}, 0);

console.log(total); // Output: 60

const orders = [
  { product: "Book", price: 20 },
  { product: "Pen", price: 5 },
  { product: "Bag", price: 50 },
];

const totalPrice = orders.reduce((accumulator, order) => {
  return accumulator + order.price;
}, 0);

console.log(totalPrice); // Output: 75

const votes = ["yes", "no", "yes", "yes", "no"];

const voteCount = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log(voteCount); // Output: { yes: 3, no: 2 }
