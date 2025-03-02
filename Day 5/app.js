const student = {
    name : "Md Afzal",
    age : 20,
    math : 97,
    phy : 98,
    chem : 96,
    avgMarks() {
        return (this.math + this.phy + this.chem)/3;

    },
    username : "afzal14777",
    password : "afzal$34",
    city : "jharkhand"
};

// try {
//     console.log(a);
// } catch {
//     console.log("Variable a is not defined chutiye . . . Code pr dhiyan de");
// }

// Arrow function //

// const sum = (a,b) => {
//     console.log(`Sum is ${a+b}`);
// }

// const power = (a,b) => {
//     console.log(`Square of ${a}^${b} is ${Math.pow(a,b)}`);
// }

// implicit return //

// const mul = (a,b) => a*b;

// Set timeout function //

// console.log("Hello There!");

// setTimeout(() =>{
//     console.log("Apna Collage")  ;
// }, 4000);

// console.log("Welcome to");

// setTimeout(() => {
//     console.log(`Power of ${4}^${6} is ${4**6}`);
// }, 6000);

// function calculator(a,b,c) {
//     console.log(a**b**c);
// };


// setTimeout(calculator(2,2,2), 3000);

// let id = setInterval(()=> {
//     console.log("Hello Afzal!");
// }, 2000);

// clearInterval(id);

// const student = {
//     name : "Afzal",
//     age : 20,
//     marks : 457,
//     prop : this,
//     getName : function() {
//         console.log(this);
//         console.log(this.name);
//     },

//     getMarks: () => {
//         console.log(this);
//         console.log(this.marks);
//     }
// };

// forEach() function is used to iterate over an array and it is used to simplifies the code & enhance readability by removing explicit loops & providing direct access to each elements .

// forEach() method is not deels only with array it also deels with complex data structiures .

// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function(item, index) {
//     console.log(`at index ${index} fruit store is ${item}`);
// });

// const number = [1,2,3,4,5];
// number.forEach((value, idx, array) => {
//     array[idx] = value * 10;
// });

// console.log(number);

// // handling array objects using forEach() //

// const users = [
//     {
//         name : "Afzal",
//         age : 20,
//         branch : "CS"
//     },
//     {
//         name : "Sahil",
//         age : 30,
//         branch : "Bio"
//     },
//     {
//         name : "Komal",
//         age : 12,
//         branch : "ITI"
//     }
// ];

// users.forEach(user => {
//     console.log(`${user.name} is ${user.age} years old and ${user.branch} branch.`);
// })

// map() function . It creates a new array by applying a function to each element of the orignal array //


let number = [1,2,3,4,5,6,7,8,9,10];

// let newAr = number.map(function(el) {
//     return el * 2;
// });

// console.log(newAr);

// let num = number.map(x => x*2);
// console.log(num);
// console.log(`Length of the array is : ${num.length}`);


// let sqr = number.map(function(value, idx) {
//     return {idx, val : value*value};
// });

// console.log(sqr);

// const word = "Geeks";

// let res = Array.prototype.map.call(word, function(char) {
//     return char + 'A';
// });

// console.log(res);

// let double = number.map(function(eachItem) {
//     return eachItem*eachItem;
// });

// console.log(`Number are : ${number}`)
// console.log(`Double variable store's the square of numbers' : ${double}.`);


// // create an object of students and create individual arrays for each information ./

// const students = [
//     {
//         name : "Afzal",
//         age : 20,
//         subjects : ["Maths", "Chemestry", "Physics", "English"],
//         marks : 98.7
//     },
//     {
//         name : "Akmal",
//         age : 18,
//         subjects : ["Maths", "Chemestry", "Physics", "English"],
//         marks : 89.7
//     },
//     {
//         name : "Ali",
//         age : 27,
//         subjects : ["Maths", "Chemestry", "Physics", "English"],
//         marks : 67.7
//     },
//     {
//         name : "Haider",
//         age : 22,
//         subjects : ["Maths", "Chemestry", "Physics", "English"],
//         marks : 88.9
//     }
// ];

// let student_name = students.map(name => {
//     return name.name;
// });


// let GPA = students.map(mark=> {
//     return (mark.marks/10);
// });

// console.log(`Student names are : ${student_name}`);
// console.log(`GPA's For Each Student Is : ${GPA}`);

// let subjects = students.map(sub => {
//     return sub.subjects;
// });

// console.log(`Subjects of each students : ${subjects}`);

// filter() function -> similer to map() function.

// console.log(number);

// let even = number.filter(num => {
//     return num % 2 == 0;
// });

// console.log(`Even number's are : ${even}`);
// let odd = number.filter(num => {
//     return num % 2 != 0;
// });

// console.log(`Odd numbers' are : ${odd}`);

// let desicion = even.every(itemEach => itemEach % 2 == 0);
// let desicion2 = odd.every(itemEach => itemEach % 2 == 0);

// console.log(`Is all the elements of the array is even : ${desicion}`);
// console.log(`Is all the elements of the array is odd : ${desicion2}`);


let reduce_sum = number.reduce((acc, currVal) => acc + currVal, 0);
console.log(`Sum of numbers' ${reduce_sum}`);

let num = [1,2,3,4,5,6];
let evSum = num.reduce((res, elem) => {
    if (elem % 2 == 0) {
        res += elem;
    }
    return res;
});

console.log(evSum - 1);

let oddSum = num.reduce((res, elem) => {
    if (elem % 2 != 0) {
        res += elem;
    }
    return res;
});

console.log(oddSum + 1);


let nums = [10,20,60,54,2,35,90,45,78,43];

// let max_value = nums.reduce((acc, val) => (val > acc ? val : acc), nums[0]);
// console.log(`Max value in the array is : ${max_value}`);

// let min_value = nums.reduce((acc, val) => (val < acc ? val : acc), nums[0]);
// console.log(`Minimum value in the array is : ${min_value}`);

// function sum (a, b = 10) {
//     return a + b;
// }

// console.log(sum (10));

// spread -> this function is used to expand an iterable into multiple values
// example : 

console.log(`Minimum number in the array nums is : ${Math.min(...nums)})`);
console.log(`Max value in the given array is : ${Math.max(...nums)}`);

// let name = "MdAfzal";
// console.log(...name);     // M d A f z a l

const data = {
    email : "mdafzal14777@gmail.com",
    password : "adXnWi33M7"
}

const cpData = {...data, id : Math.floor(Math.random() * 10000) + 1};

// console.log(...nums);

// rest -> this function is used to take indefinite number of arguments and bundle them into an array .
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; ++i) {
        total += args[i];
    }

    return total;
}

console.log(`Sum of All The Provided Number Is : ${sum(...nums)}`);
let {username : user, password : pass, city : place = "Mumbai"} = student;

const sq = number.map(num => num * num);

console.log(`Square of the number is : ${sq}}`);

let sum2 = sq.reduce((res, value) => res+value);
console.log(sum2);

let avg = sum2/sq.length;
console.log(`Average of the array is : ${avg}`)