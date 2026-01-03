const tasks = [1000, 2000, 1500];

tasks.forEach((time) => {
  setTimeout(() => {
    console.log(`Task finished in ${time}ms`);
  }, time);
});

function fetchData(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Sample" });
  }, Math.random() * 2000);
}

// Fetch multiple IDs and log each when done
[1, 2, 3].forEach((id) => {
  fetchData(id, (data) => {
    console.log(`Fetched data for ID ${data.id}:`, data);
  });
});
// Simulate fetching data asynchronously
