// Task-9 : event delegation..

const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
  console.log("Clicked on:", event.target.textContent);
});

//Task-10 : adding new element on ul by event delegation..

function random() {
  const lang = document.getElementById("newLi").value;
  const li = document.createElement("li");
  li.textContent = lang;
  list.appendChild(li);
}
