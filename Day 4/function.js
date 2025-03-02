// function's in javascripts
// -------------------------------
// function -> block of code that perform's a specific task, can be invoked whenever needed .

// function myFunction () {   // non parameterise function
//     console.log("Welcome To Apna Collage!");
//     console.log("Learning Functions In JS With Shraddha Didi!");
    
// }

// myFunction();
// myFunction();

// let name = prompt(`Enter Your Name : `);
// let age = Number(prompt(`Enter Your Age : `));
// let rollNo = Number(prompt(`Enter Your Roll No : `));

// function myFun(name, age, rollNo) {  // Parameterise Function
//     console.log(`Name : ${name}, Age : ${age}, Roll No : ${rollNo}`);
// }

// myFun(name, age, rollNo);

// calculate sum

// function sum(a, b) {
//     // here the variables a & b are local variable means the scope of these variables will only inside this function . 
//     s = a + b;
//     // return keyword is used to return something from function.
//     return s;

//     // after return statement if we try to do something, it will never execute .
// }

// if you try to access a variable which is local to a function, we get an error .

// here is the error : Uncaught ReferenceError: a is not defined
// console.log(a);
// console.log(sum(2,3));   // printing function.

// Arrow Functions -> compact way of writing a function

// example : 

// const arrowSum = (a,b) => {
//     return a+b;
// }

// function Dise() {
//     let dise = Math.floor(Math.random() * 6) + 1;
//     console.log(dise);
// }


// Dise();


// function Avg(a,b,c) {   
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// Avg(10,20,30);
// Avg(12,34,43);
// Avg(45,34,32);

// printing table using function //

// function printTable(num) {
//     for (let i = 1; i <= 10; ++i) {
//         console.log(`${num} * ${i} = ${i * num}`);
//     }
// }

// printTable(5);

// function SUM(n) {
//     let sum = (n * (n+1))/2;
//     return sum;
// }

// console.log(`Sum From 1 To ${10} =  ${SUM(10)}`);

// let str = ["Hi", "Hello", "Afzal", "Bye", "!"];

// function concat (str) {
//     let res = "";
//     for (let i = 0; i < str.length; ++i) {
//         res += str[i] + " ";
//     }

//     return res;
// }

// console.log(concat(str));

// function multipleGreet(func, count) {
//     for (let i = 1; i <= count; ++i) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("Hello Afzal!");
// }

// multipleGreet(greet, 10);

// function evenOdd(request) {
//     if (request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     } else if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else {
//         console.log("Wrong Request");
//     }
// }

// evenOdd();

// const calc = {
//     add : function(a,b) {
//         return a+b;
//     },
//     sub : function(a,b) {
//         return a-b;
//     },
//     mul : function(a,b) {
//         return a*b;
//     }
// };

// Q1. Write a JavaScript function that returns array elements larger than a number.

// let arr = [2,5,8,10,100,5,15];

// function largerNumber(arr) {
//     let large = arr[0];
//     for (let i = 1; i < arr.length; ++i) {
//         if (large < arr[i]) {
//             large = arr[i];
//         }
//     }
//     return large;
// }

// console.log(`Largest Number in The Given Array Is : ${largerNumber(arr)}`);


// Q2. Write a JavaScript function to extract unique characters from a string .
// Example : str = "abcdabcdefgggh", ans = “abcdefgh”;

// let str = "abcdabcdefgggh";

// function unique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; ++i) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }

//     return ans;
// }

// console.log(unique(str));

// Q3 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output .

// Example : country = ["Australia","Germany","United State Of America"];
// Output : United State Of America

// let country = ["Australia","Germany","United State Of America"];

// function lengthCountry(country) {
//     let idx = 0;
//     let currCtr = country[idx].length;
//     for (let i = 1; i < country.length; ++i) {
//         if (country[i].length > currCtr) {
//             currCtr = country[i];
//             idx = i;
//         }
//     }

//     return country[idx];
// }

// console.log(`Longest country name is : ${lengthCountry(country)}`);

// Q4. Write a JavaScript function to count the number of vowels in a String argument.

// let str = "apnacollage";

// function vowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; ++i) {
//         if (str[i] == 'a' ||
//             str[i] == 'e' ||
//             str[i] == 'i' ||
//             str[i] == 'o' ||
//             str[i] == 'u'
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(`Sentence ${str} contains : ${vowels(str)} vowels`);

// Q5. Write a JavaScript function to generate a random number with in a range .(start,end);

let start = 100;
let end = 200;

function randNumber(start, end) {
    let diff = end-start;
    let rand = Math.floor(Math.random() * diff) + 1;

    return rand;
}

console.log(`Random number in between ${start} & ${end} is : ${randNumber(start,end)}`);