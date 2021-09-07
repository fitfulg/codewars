// REMOVE VOWELS
// write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become 
//"Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}
console.log(disemvowel("This website is for losers LOL!"));

// TRANSFORM NUMBER INTO A STRING
// We need a function that can transform a number into a string.
function numberToString(num) {
    return num.toString();
}
console.log(numberToString(67)); //67

// MATH
// Complete the square sum function so 
// that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
        return (n * n) + sum;
    }, 0)
}
//OPTION 2
function squareSum2(numbers) {
  const arr = numbers.map((item) => item * item);
  total = 0;
  for (let i in arr) {
      total += arr[i];
    }
  return total;
}
console.log(squareSum([1, 2]));


// find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.
// Examples
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
function getSum(a, b) {
    return (a === b) ? a : a + b;
}
console.log(getSum(2, 3)); //5
console.log(getSum(2, 2)); //2

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7
// SOLUTION 1:
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2); //Never use eval()! is a dangerous function, 
    //which executes the code it's passed with the privileges of the caller.
}
// SOLUTION 2: a safer solution
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// BINARY ARRAY
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
const binaryArrayToNumber = arr =>
    parseInt(arr.join(''), 2); //parseInt(string, base);

console.log(binaryArrayToNumber([0, 1, 1, 0])); //6 in binary

// BINARY ADDITION
// Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.

// The binary number returned should be a string.
function addBinary(a, b) {
    return (a + b).toString(2)
}
console.log(addBinary(2, 9));

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, 
// he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, 
// rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
    return Math.floor(time / 2);
}
console.log(`${litres(12.3)} litres per hour`);

// RETURN TOTAL NUMBER OF PERSONALIZED ELEMENTS IN A ARRAY
// return the total number of smiling faces.

// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example:
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(")") || arr[i].includes("D")) count++
    }
    return count;
}
console.log(`${countSmileys([':D',':~)',';~D',':)'])} caritas correctas`) //4
console.log(`${countSmileys([':)',':(',':D',':O',':;'])} caritas correctas`) //2

// COUNTING BOOLEANS IN ARR
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];
// OPTION1
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// OPTION2
function countSheeps1(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}
// OPTION3
function countSheeps2(arrayOfSheep) {
    var count = 0;

    arrayOfSheep.forEach(function(sheep) {
        if (sheep)
            count++;
    });

    return count;
}

console.log(countSheeps(array1) == 17, "There are 17 sheeps in total");
console.log(countSheeps1(array1) == 17, "There are 17 sheeps in total");
console.log(countSheeps2(array1) == 17, "There are 17 sheeps in total");

// MODIFY THE CASE STYLE OF A STRING
// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// OPTION1
String.prototype.toJadenCase = function() {
    var words = this.split(' ');

    for (var i = 0, wordsLen = words.length; i < wordsLen; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(`Jaden case = ${str.toJadenCase()}`);

// OPTION2
String.prototype.toJadenCase2 = function() {
    return this.replace(/(^|\s)[a-z]/g, function(x) { return x.toUpperCase(); });
};
var str = "How can mirrors be real if our eyes aren't real";
console.log(`Jaden case = ${str.toJadenCase2()}`);

// OPTION3
String.prototype.toJadenCase3 = function() {
    return this.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(`Jaden case = ${str.toJadenCase3()}`);


// EJEMPLO métodos string

const string = 'Lupita code' ;

string.indexOf('Code') //-1
string.includes('pita') //true
string.replace('code', 'coding') 
string.slice(1,2) //u
string.substring(1,2) //u
string.substr(1,2) //up
string.charAt(0) //L
string.repeat(2) 
string.split('  ') //['Lupita' , 'code']

string.startsWidth('L') //true
string.endsWidth('e') //true
string. search('de') //9
string.toLowerCase() 
string.toUpperCase() 


const string2 = '   Lupita code   ';

string2.trim() //Lupita code
string2.trimStart() //Lupita code⬜⬜
string2.trimEnd() //⬜⬜Lupita code
