// array is a data structure that are used to more than one value means a collection of data or things into a single variable .

let students = ["afzal", "akmal", "ali", "haider"];

// console.log(students[0]);
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[3]);

// for (let index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }

// console.log(students);
// console.log("Tyoe of Student is : ",typeof(students));

// creating an array //

// let marks = [10,867,67,54];
// let names = ["afzal", "ali", "haider", "akhil","junaid"];
// let info = ["Afzal", 162, 98.7];    // mixed array //

// let newArray = [];   // empty array //

// console.log(marks, names, info);

// arrays are mutable //

// let fruits = ["banana", "mango","grapes"];

// fruits[0] = "apple";
// console.log(fruits);
// 
// array methods //

// 1. push()    2. pop()    3. shift()  4. Unshift()

students.push("nayak");   // it will add the data at the end of the array 
// console.log(students);  // ['afzal', 'akmal', 'ali', 'haider', 'nayak']

// console.log(students.pop());    // it return the poped() element from end -> nayak

// students.unshift("nayak");  // it will add the data at the start of the array //
// console.log(students);  //  ['nayak', 'afzal', 'akmal', 'ali', 'haider', 'nayak']

// console.log(students.shift());  // it will delete from start and return it => nayak

let follower = ["afzal", "ali", "haider", "firoz", "ansari", "wasim"];
let blocked_user = follower.shift();

// console.log(`My follower's : `,follower);
// console.log('Blocked users are : ', blocked_user);
// class work : for the given start state of an array, change it to final form using methods //

// let months = ['january', 'july', 'march', 'august'];


//console.log(final);  // O/P : ['july', 'january', 'march', 'august']

// functions on array

// 1. indexOf() -> return the index value 
// 2. includes() -> return 'true' or 'false' means a boolean value and it check any element or data present in the array or not 

// 3. concat() -> merge two arrays
// 4. reverse() -> reverse an array

// example :

let primary = ["red", "yellow", "blue"];
let secondry = ["orange", "green", "voilet"];

// console.log(primary.indexOf("yellow"));     // 1
// console.log(primary.indexOf("orange"));     // -1

// console.log(primary.includes("yellow"));     // true
// console.log(primary.includes("orange"));     // false

// console.log(primary.concat(secondry)); // concat two arrays : ['red', 'yellow', 'blue', 'orange', 'green', 'voilet']

let concatArray = primary.concat(secondry);
console.log(concatArray);  // (6) ['red', 'yellow', 'blue', 'orange', 'green', 'voilet']


// // console.log(primary.reverse());  // reverse the primary array : ['blue', 'yellow', 'red']
// console.log(concatArray);
// // console.log(concatArray.slice(2));

// // console.log(concatArray.slice(2,3));  //  
// console.log(concatArray.slice(-2));  //  

// splice() -> this method is used to removes/replace/add elements in place //


console.log(concatArray.splice(3));  // from index 3 to end of the array //
console.log(concatArray.splice(0,2));   //  start from 0 and it will delete total 2 values from starting value //
console.log(concatArray.splice(0,2, "gray","yellow"));



