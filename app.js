// Very Easy
//Write a function named min that takes two arguments and returns their minimum.
function min(num1, num2){
    if (num1 < num2){
        return num1
    } else {
        return num2
    }
}

//Easy
//Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."
var firstName = ["Aline", "Adeline", "Opaline"];
var lastName = ["Moreau", "Morneau", "Morrow"];
var age = [19, 21, 13];
var students = [firstName, lastName, age];
console.log(`Hello, my name is ${students[0][1]} ${students[1][1]} and I'm ${students[2][1]} years old.`)


//Medium
//Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
var month = ["empty", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var numForMonth = prompt("Please enter a number from 1 - 12 and I will tell you what month corresponds.");

function isNumber(userInput){
    if (!isNaN(numForMonth)){
        return true;
    } else {
        return false;
    }
}

if (numForMonth < 1 || numForMonth > 12){
    console.log("You have entered an invalid number. Please try again.")
} else if (isNumber(numForMonth) === false){
    console.log("I only accept numbers. Please try again.")
} else {
    var correspondingMonth = month[numForMonth];
    console.log(correspondingMonth);
}


//Hard
/* Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 g
Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */
var tomHeightIn = 9;
var tomMassG = 8;
var jerryHeightIn = 10;
var jerryMassG = 45;

var tomBMI = tomMassG / (tomHeightIn * tomHeightIn);
var jerryBMI = jerryMassG / (jerryHeightIn * jerryHeightIn);

var tomHigher;

if (tomBMI > jerryBMI){
    tomHigher = true;
} else{
    tomHigher = false;
}

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigher}`)