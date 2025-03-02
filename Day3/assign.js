
// Question 1

// let array = [1,2,3,4,5,6,2,3];

// for (let i = 0; i < array.length; ++i) {
//     if (array[i] == 2) {
//         array.splice(i, i);
//     }
// }

// for (let i = 0; i < array.length; ++i) {
//     console.log(`${array[i]}`);   // O/P : [1,3,4,5,6,3]
// }


// Question 2

// convert the number (integer) into string and run for loop 
// let number = "45737862";

// let count = 0;
// for (let i = 0; i < number.length; ++i) {
//     count++;
// }
// console.log(`Total no of digits in ${number} is ${count}.`);

// Question 3:

// let number = 287152;
// let sum = 0;

// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number/10);
// }

// console.log(`The sum of the digit ${number} is ${sum}`);

// Question 4:

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; ++i) {
//     fact *= i;
// }

// console.log(fact);

// Question 5

// let numArr = [2,5,100,9,7,10,-93,97];
// let gnum = numArr[0];

// for (let i = 1; i <= numArr.length; ++i) {
//     if (numArr[i] > gnum) {
//         gnum = numArr[i];
//     }
// }

// console.log(`Greatest Number in the array is : ${gnum}`);


//  Assignment For Object Literal's

// Q1. Create a program that generates a random number representing a dice roll . [the number should be between 1 and 6] .

// generating a number from 1 to 6

let ran = Math.floor(Math.random() * 6) + 1;

//  Q2. Create an object representing a car that stores the following properties for the car : name, model, color. 

// printing the car name //

// let car = {
//     name : ["Hyundai", "BMW", "Nissan","Audi","Toyota","Renault","Mercedes-Benz"],
//     modal : ["i20 and Creta","SUVs, and coupes","sedans","A3 sedan", "hatchbacks"],
//     color : ["red", "black", "yellow", "brown", "red-blue", "gray"]
// };

// let car_name = car.name[0];  // accessing first car's name
// let model_name = car.modal[0];  // accessing first car's model
// let color_name = car.color[0];  // accessing first car's color

// console.log(`Car Name : ${car_name} Model : ${model_name} Color : ${color_name}`);

// Q3. Create an object Person with their name, age and city.

const person = {
    name : "Md Afzal Ansari",
    age : 20,
    city : "Mumbai"
};

// Edit their city's orignal value to change it to "New York".
person.city = "New York";

// Add a new property country and set it to the United State .
person.country = "United State";