// Task-3 : Add mouseover event listener to an element that changes its background color.

let intialColor = document.getElementById("container").style.backgroundColor;
document.getElementById("container").addEventListener("mouseover", function () {
  document.getElementById("container").style.backgroundColor = "purple";
});
// Task-4 : ADd mouseout even listener to an element that changes to its intial color.
document.getElementById("container").addEventListener("mouseout", function () {
  document.getElementById("container").style.backgroundColor = intialColor;
});

