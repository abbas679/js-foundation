const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const userList = document.getElementById("userList");

async function loadUsers() {
  // Task C: disable button while loading
  loadBtn.disabled = true;
  loadBtn.textContent = "Loading...";

  userList.innerHTML = "<li>Loading users...</li>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    userList.innerHTML = "";

    // Task A: show email instead of name
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.email;
      userList.appendChild(li);
    });

    console.log("Users loaded successfully:", users);
  } catch (error) {
    userList.innerHTML = "<li>Error loading users</li>";
    console.error("Error:", error.message);
  } finally {
    // Task C: re-enable button
    loadBtn.disabled = false;
    loadBtn.textContent = "Load Users";
  }
}

// Task B: clear users
function clearUsers() {
  userList.innerHTML = "";
  console.log("User list cleared");
}

loadBtn.addEventListener("click", loadUsers);
clearBtn.addEventListener("click", clearUsers);
