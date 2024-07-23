// Task-4 : async and await

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "prshntshrmma",
        email: "prashantsharma4249@gmail.com",
      });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

let consumePromise = async () => {
  let response = await myPromise;
  console.log(response);
};


// Task-5:async function that handles the rejected promise by try catch block

consumePromise = async () => {
  try {
    let response = await myPromise;
    console.log(response);
} catch (error) {
    console.log(error);
}
};

consumePromise();