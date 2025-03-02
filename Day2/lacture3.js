// methods in String 

// 1. trim() -> used to trim white spaces from a given string and returns a new string . here is the example

// let msg = " Hello ";
// // msg.trim();
// console.log(msg);
// console.log(msg.trim());

// let pass = prompt("set a password : ");
// // console.log(pass.trim());
// let password = pass.trim();
// console.log(password);

// 2. toLowerCase() and toUpperCase()

// let name = "AFZAL";
// let newName = name.toLowerCase();
// let upperCase_name = name.toUpperCase();
// console.log("Convert to Lower Case : ",newName);
// console.log("Convert to Upper Case : ", upperCase_name);

// let str = "ILoveCoding";
// console.log(str.indexOf("L"));  // Love present at index 1
// console.log(str.indexOf("o"));  // Love present at index 2

// Method chaining

// using one method after another //
// order of execution will be left to right //

// let msg = " hello ";
// let newMsg = msg.trim().toUpperCase();  // here one method is used after one //
// console.log("After using chaining methods : ", newMsg);

// slice() -> it returns a part of the orignal string as a new string 
// it holds starting as well as ending index and ending index is not included it's always ending index = (ending-inding-1)

let love = "IloveCoding";
// console.log(love.slice(-2));  // ve

// let ans = love.slice(5);
// console.log(ans);

// console.log(love.slice(1,5));

// console.log(love.replace("love", "do"));

// repeat()-> is used to repeat the string with no of copies //
// example //

// console.log(love.repeat(2));  // o/p : IloveCodingIloveCoding  //

// class work //

// Q1 trim and convert into uppercase //
let msg = "help";
// console.log(msg.trim().toUpperCase());  // o/p => HELP

// Q2. for the string predict output //

let name = "ApnaCollage";

// console.log(name.slice(4,9));   // O/P =>  Colla
// console.log(name.indexOf("na"));   // O/P => 2
// console.log(name.replace("Apna","Our"));   // O/P => OurCollage

//  Q3. Separate the Collage part in the above string and replace l with t in it .

// let sep = name.slice(4).replace('l', 't');
// console.log(sep);  // The 'Collage' is saperate from ApnaCollage and 'l' is replaced with 't'
// O/P => Cotlage






