const input = document.getElementById("textInput");

// input.addEventListener("input", (e) => {
//   console.log("Input value:", e.target.value);
// });

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const logInput = (e) => {
  console.log("Debounced input:", e.target.value);
};

// 500ms
input.addEventListener("input", debounce(logInput, 500));
