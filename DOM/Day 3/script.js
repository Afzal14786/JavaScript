let input = document.querySelector("input");
let ul = document.querySelector("ul");

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let btn = document.createElement("button");
    btn.classList.add("delClass");
    btn.innerText = "Delete Task";

    item.innerText = input.value;
    ul.appendChild(item);
    item.appendChild(btn);
    input.value = "";
});

// let delButtons = document.querySelectorAll(".delClass");

// for (delbtns of delButtons) {
//     delbtns.addEventListener("click", function() {
//         let prnt = this.parentElement;
//         console.log("Del Clicked");
//         prnt.remove();
//     });
// }

ul.addEventListener("click", function(event) {
    let par = event.target.parentElement;
    par.remove();
    console.log("Deleted");
}); 

let h1 = document.querySelector("h1");

// implementing Promises in JS //
function colorChange(color, delay) {
    h1.style.color = color;
}
