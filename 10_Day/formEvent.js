// Task-7 : farm handling, prevent default

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

// Task-8 : select dropdown value and display on the paragraph.

document.getElementById("selection").addEventListener("change", function () {
  document.getElementById("inputText").textContent = this.value;
});
