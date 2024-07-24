// Task-8 : error handling in while fetching data through fetch api...

// fetch("https://jsonplaceholderr.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Task-9 : async await

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholderr.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
