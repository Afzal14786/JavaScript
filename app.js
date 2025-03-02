// let num = 6;
// let str = '6';

// console.log("Data type for num : ",typeof(num));
// console.log("Data type for str : ",typeof(str));

// if (num === str) {
//     console.log("Sahi hai");
// } else {
//     console.log("Galat hai");
// }


// comparision for non number's 

// alert("Something went wrong");
// console.error("Somewerror");
// console.warn("Here is some warning ");

// let first_name = prompt("Enter first name : ");
// let last_name = prompt("Enter last name : ")
// // alert("Hello", first_name, " ", last_name, "!");
// let message = "Welcome " + first_name + " " + last_name + "!";
// alert(message);

// exercise //

// Q1.
let num = 55;

if (num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
    
}

// Q2. 

// let name = prompt("enter your name : ");
// let age = prompt("enter your age : ");

// let name_age = name + " " + age + " years old.";
// alert(name_age);

// Q3.

let quater = Number(prompt("Enter quater (integer only 1 to 4): "));
switch (quater) {
    case 1:
        console.log(`Months in quater 1 : January, February & March`);
        break;
    case 2:
        console.log(`Months in quater 2 : April, May & June`);
        break;
    case 3:
        console.log(`Months in quater 3 : July, August & September`);
        break;
    
    case 4:
        console.log(`Months in quater 4 : October, Nivember & December`);
        break;
    default:
        console.log("Not a valid quater");
        break;
}

console.log(quater);

//  Q4. 

// let str = prompt("enter name start from letter 'A' or 'a' : ");

// if (str.length > 5 && str[0] == 'A' || str[0] == 'a') {
//     console.log("It's a golden string");
// } else {
//     console.log("Not a golden string.");
    
// }

// Q5. write a program to find the largest of 3 number's 

// let n1 = Number(prompt("enter first number : "));
// let n2 = Number(prompt("enter second number : "));
// let n3 = Number(prompt("enter third number : "));

// if (n1 > n2 && n1 > n3) {
//     console.log(n1, " is greater.");
// } else if (n2 > n3) {
//     console.log(n2, " is greater.");
// } else {
//     console.log(n3, " is greater");
    
// }

// Q6. Write a progam to check if 2 numbers have the same last digit.

let n1 = prompt("enter 1st number : ");
let n2 = prompt("enter 2nd number : ");

if (n1[n1.length-1] == n2[n2.length-1]) {
    console.log("Both have same last digit and that is : ", n1[n1.length-1]);
} else {
    console.log("No, don't have same number");
}
