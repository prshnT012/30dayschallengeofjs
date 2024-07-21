// Task-9 : add a click event listener to a button that changes the content of the paragraph

// adding button onclick event

<button onclick="changePara()">change para</button>

// function defination...

function changePara(){
    document.getElementById("element").innerText = "changed para content..."
}


// Task-10 : add a mouse event listener that changes its border color...

const element = document.querySelector('.main');

element.addEventListener('mouseover', function() {
    console.log("Mouse over the element. Changing border color...");
    element.style.border = '2px solid red';
});

element.addEventListener('mouseout',function(){
    console.log("mouse out from the element, changing the border color to its intial color")
    element.style.border = '';
});