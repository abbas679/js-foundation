const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");

/* ---------- debounce ---------- */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/* ---------- throttle ---------- */
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/* ---------- highlight helper ---------- */
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

/* ---------- fetch users ---------- */
async function fetchUsers(query) {
  status.textContent = "Loading...";
  resultsDiv.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      status.textContent = "No users found";
      return;
    }

    status.textContent = `${filtered.length} user(s) found`;

    filtered.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `
        ${highlightText(user.name, query)} — 
        ${highlightText(user.email, query)}
      `;
      resultsDiv.appendChild(div);
    });
  } catch (err) {
    status.textContent = "Failed to load users";
  }
}

/* ---------- debounced search ---------- */
const debouncedSearch = debounce((e) => {
  const query = e.target.value.trim();
  if (query) {
    fetchUsers(query);
  } else {
    resultsDiv.innerHTML = "";
    status.textContent = "";
  }
}, 500);

input.addEventListener("input", debouncedSearch);

/* ---------- clear button ---------- */
clearBtn.addEventListener("click", () => {
  input.value = "";
  resultsDiv.innerHTML = "";
  status.textContent = "";
});

/* ---------- throttled scroll ---------- */
const throttledScroll = throttle(() => {
  console.log("Scrolling results...");
}, 500);

resultsDiv.addEventListener("scroll", throttledScroll);
