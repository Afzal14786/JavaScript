// for-loops in javascripts

// for (let i = 0; i <= 10; ++i) {
//     console.log(i);
// }

// printing all odd numbers from 1 to 15

// console.log(`Odd number's from 1 to 15`);


// for (let i = 1; i <= 15; ++i) {
//     if (i % 2 != 0) {
//         console.log(`Odd number is : ${i}`);
//     } 
// }

// console.log(`Even number's from 2 to 10`);


// for (let i = 2; i <= 10; ++i) {
//     if (i % 2 == 0) {
//         console.log(`Even number is : ${i}`);
        
//     }
// }

// console.log(`Backwards even number's from 2 to 10 : `);
// for (let i = 10; i >= 1; --i) {
//     if (i % 2 == 0) {
//         console.log(`Even number is : ${i}`);
//     }
    
// }


// multiplication table of 5

// let n = Number(prompt(`enter the table number : `));
// for (let i = 1; i <= 10; ++i) {
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// nested for loops

// for (let i = 1; i <= 5; ++i) {
//     for (let j = 1; j <= 5; ++j) {
//         if (i == j) {
//             console.log(i * 2);
//         } else {
//             console.log(" ");
//         }
//     }
// }

// while loop //

// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     ++i;
// }

// Favorite Movie Game //

// const favorite_movie = "avatar";
// let guess = prompt(`enter your favorite movie name : `);

// while ((guess != favorite_movie)) {
//     if (guess == favorite_movie) {
//         console.log("congrates ! you guessed correct movie.");
//         break;
//     } else if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
    
//     guess = prompt(`You guessed wrong enter again : `);
// }

// loop with array

let fruits = ["apple", "banana", "grapes", "orange", "papaya", "mango"];

// for (let i = 0; i < fruit.length; ++i) {
//     console.log(i, fruit[i]);
// }

// console.log(`length of the array is : ${fruit.length}`);

// nested loop 

let heros = [["Sharukh Khan", "Salman Khan", "Amir Khan"], ["Akshay Kumar", "Kartik Aryan", "Varun Dhawan"], ["Sunil Shetthy", "Imran Hashmi", "John Ibraham"]];

// for (let i = 0; i < heros.length; ++i) {
//     console.log(`List Of Heros #${i+1}`);
//     for (let j = 0; j < heros[i].length; ++j) {
//         console.log(`${j+1} : ${heros[i][j]}`);
        
//     }
// }

// nested for of loop
// for (list of heros) {
//     for (hero of list) {
//         console.log(hero);
        
//     }
// }


// for (fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "ApnaCollage") {
//     console.log(char);
    
// }