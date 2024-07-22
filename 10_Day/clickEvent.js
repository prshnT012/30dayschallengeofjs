// Task-1 : Add click event listener to change the paragraph content by clicking the button.

function change(){
    const para = document.getElementById("para");
    para.innerText = "changed para content."
}

const button = '<button onclick="change()">change paragraph content</button>';

// Task-2 : Add double click event listener that toggles its visibility...

function toggle() {
    let x = document.getElementById("img");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('dblclick',toggle);