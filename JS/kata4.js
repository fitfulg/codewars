// Given an array of integers, return a new array with 
//each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

// WITHOUT MAP
function maps(x) {
    var arr = [];
    for (let i = 0; i < x.length; i++) {
        arr[i] = x[i] + x[i];
    }
    return arr;
}

// WITH MAP
function maps(x) {
    return x.map(n => n * 2);
}


// Categorize New Member

// To be a senior, a member must be at least 55 years old 
// and have a handicap greater than 7. In this croquet 
// club, handicaps range from -2 to +26; the better the 
// player the lower the handicap.

// Input
// Input will consist of a list of lists containing two 
// items each. Each list contains information for a 
// single potential member. Information consists of an 
// integer for the person's age and an integer for the 
// person's handicap.

// Note for F#: The input will be of (int list list) 
// which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in 
// Haskell: Open or Senior) stating whether the 
// respective member is to be placed in the senior or 
// open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// OPTION 1 (functional)
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// OPTION 2
function openOrSenior(data) {
    for (i = 0; i < data.length; i++) {
        if ((data[i][0] >= 55) && (data[i][1] > 7))
            data[i] = 'Senior'

        else if ((data[i][0] < 55) || (data[i][1] <= 7))
            data[i] = 'Open'

    }
    return data;
}

// FACTORIAL

// the factorial of a non-negative integer n, denoted by 
// n!, is the product of all positive integers less than 
// or equal to n. 
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. 
// By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. 
// If input is below 0 or above 12 throw an exception of 
// type RangeError.

function factorial(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}


// DOUBLE CHAR

// Given a string, you have to return a string in which 
// each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

// option1
function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++) {
        word = word + str[i] + str[i];
    };
    return word;
};

//   option2 
const doubleChar2 = (str) => str.split("").map(c => c + c).join("");

// If you can't sleep, just count sheep!!

// Given a non-negative integer, 3 for example, return a 
// string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

// OPTION 1
var countSheep = function(num) {
    let str = "";
    for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
    return str;
}

// OPTION 2
var countSheep = num => {
    let str = `${num} sheep...`;
    return num == 1 ? str : countSheep(num - 1) + str;
}

// IS IT EVEN?

// Your code will determine if the number passed is even 
// or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or 
// floats.

// Floats are considered UNeven for this kata.

function testEven(n) {
    return n % 2 === 0;
}

// FIND THE MIDDLE ELEMENT

// you need to create a function that 
// when provided with a triplet, 
// returns the index of the numerical 
// element that lies between the other 
// two elements.

// The input to the function will be an 
// array of three distinct numbers 

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 
// and 3 and the index of 2 in the 
// input array is 0.

// Another example:

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 
// and 14 and the index of 10 in the 
// input array is 1.

// OPTION 1
var gimme = function(a) {
    // Implement this function 
    var copy = [];
    copy.push(a[0], a[1], a[2]);
    var x = a.sort(function(a, b) {
        return a - b;
    });
    return copy.indexOf(x[1]);
};

//   OPTION 2
const gimme2 = input => input.indexOf([...input].sort((a, b) => a - b)[1]);

/*
SENTENCE SMASH

Write a function that takes an 
array of words and smashes them 
together into a sentence and 
returns the sentence. 

Example
['hello', 'world', 'this', 'is', 
'great']  =>  'hello world this 
is great'
*/

function smash(words) {
    "use strict";
    return words.join(' ');
};

function smash(words) {
    let sentence = words[0];
    if (words.length > 0) {
        for (let i = 1; i < words.length; i++) {
            sentence += " " + words[i];
        }
        return sentence;
    } else {
        return "";
    }
};
/*
CALCULATE BMI

Write function bmi that 
calculates body mass index (bmi 
= weight / height ^ 2).

if bmi <= 18.5 return 
"Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return 
"Overweight"

if bmi > 30 return "Obese"   */

function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        case bmi > 30:
            return "Obese";
    }
}

function bmi2(weight, height) {

    var bmi = weight / (height * height);

    return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}

console.log(bmi(80, 1.80)); //Normal
console.log(bmi(79, 1.69)); //Overweight