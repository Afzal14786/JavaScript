// let imgId = document.getElementsByClassName("oldImg");
// console.dir(imgId[0]);
// console.dir(imgId[1]);
// console.dir(imgId[2]);

// // console.log(document.querySelector('p').innerText);
// // console.log(document.querySelector('p').innerHTML);
// // console.log(document.querySelector('p').textContent);

// let links = document.querySelectorAll(".box a");

// // for (let i = 0; i < links.length; ++i) {
// //     links[i].style.color = "red";
// // }

// for (link of links) {
//     link.style.color = "teal";   // it is set as inline style not in the actual CSS .
// }

// console.log(links);

// let imgAttribute = document.querySelector("img");
// console.log(imgAttribute.classList.add('spImg', 'firstImg'));
// console.log(imgAttribute.classList);

// // parentElement

// let h4Parent = document.querySelector('h4');
// console.dir(h4Parent.parentElement);

// // children

// let divChildren = document.querySelector('.box');
// console.dir(divChildren.children);

// let newList = document.createElement('li');
// newList.innerText = "This element is generated by javascript";
// let unordered = document.querySelector('.box ul');
// unordered.appendChild(newList);

// // add button inside the box
// let box = document.querySelector('.box')
// let btn = document.createElement('button');
// btn.innerText = "Click Me";
// btn.style.borderRadius = "10px";
// box.appendChild(btn);

// /**
//  * let inserting new element at given  position
//  */

// let btn2 = document.createElement('button');
// let btn3 = document.createElement('button');
// let btn4 = document.createElement('button');
// let btn5 = document.createElement('button');

// btn2.innerText = "Before Begin Button !";
// btn3.innerText = "After Begin Button !";
// btn4.innerText = "Before End Button !";
// btn5.innerText = "After End Button !";

// let p = document.querySelector('p');

// p.insertAdjacentElement('beforebegin', btn2);
// p.insertAdjacentElement('afterbegin', btn3);
// p.insertAdjacentElement('beforeend', btn4);
// p.insertAdjacentElement('afterend', btn5);

/**
 * practice question
 */

let para = document.createElement('p');
para.innerText = "This paragraph tag is created using javascript";
document.querySelector('body').append(para);

para.classList.add("red");

let headElem = document.createElement('h1');
headElem.innerText = "He, I Am Blue Heading";
document.querySelector('body').append(headElem);
headElem.classList.add("blue");

let divBlock = document.createElement('div');
let head1 = document.createElement('h1');
let para1 = document.createElement('p');

head1.innerText = "I'm in a div";
para1.innerText = "MEE TOO!";

divBlock.append(head1);
divBlock.append(para1);

divBlock.classList.add('box');
document.querySelector('body').append(divBlock);