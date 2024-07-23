// Task-5 : keydown event listen

let input1 = document.querySelector("#input1");
input1.addEventListener("keydown", function (e) {
  console.log("key pressed : " + e.key);
});

// Task-6 : keyup event listen

let input2 = document.querySelector("#input2");
input2.addEventListener("keyup", function (e) {
  console.log("keyup : " + e.target.value);
});
