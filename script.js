const fetchData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject("Invalid ID");
      } else {
        resolve({ id, name: `User ${id}` });
      }
    }, 1000);
  });
};

const sequentialCalls = async () => {
  try {
    const user1 = await fetchData(1);
    console.log(user1);

    const user2 = await fetchData(2);
    console.log(user2);

    const user3 = await fetchData(3);
    console.log(user3);
  } catch (error) {
    console.log("Error:", error);
  }
};

sequentialCalls();

const parallelCalls = async () => {
  try {
    const results = await Promise.all([
      fetchData(1),
      fetchData(2),
      fetchData(3),
    ]);

    console.log(results);
  } catch (error) {
    console.log("Error:", error);
  }
};

parallelCalls();

const errorTest = async () => {
  try {
    const user = await fetchData(-1);
    console.log(user);
  } catch (error) {
    console.log("Caught error:", error);
  }
};

errorTest();
