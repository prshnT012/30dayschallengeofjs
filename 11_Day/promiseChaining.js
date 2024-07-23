// Task-3 : promise chaining..

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "prshntshrmma", email: "prashantsharma4249@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

myPromise
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
