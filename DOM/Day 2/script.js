// let btn = document.querySelector('button');

// /**
//  * addEventListener(even, callBack) -> this function is used to operate multiple events . . . 
//  */

// btn.onclick = function() {
//     // btn.addEventListener("click", greet);
//     // btn.addEventListener("click", sayHello);
//     btn.addEventListener("dblclick", function() {
//         console.log("Double Clicked In The Button !!");
//     })
// };

// function sayHello() {
//     console.log("Say Hello to Afzal . . . ");
// };

// function greet() {
//     console.log("Welcome !!!");
// };


// // btn.addEventListener("click", function() {
// //     console.log("Button Is Clicked . . .");
// // });


let btn = document.querySelector("button");
let headElem = document.querySelector("h2");
let div = document.querySelector("div");

btn.addEventListener("click", function() {
    headElem.innerText = generateRandomColor();
    let random = generateRandomColor();
    headElem.style.color =  random;
    div.style.backgroundColor = random;
});

function generateRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("Paragraph Is Clicked . . .");
});