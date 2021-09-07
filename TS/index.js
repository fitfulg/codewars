"use strict";
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
/*
Define
String.prototype.toAlternatingCase
(or a similar function/method such as
to_alternating_case/toAlternatingCase/ToAlternatingCase
in your selected language;
see the initial solution for details)
such that each lowercase letter
becomes uppercase and each uppercase
letter becomes lowercase.

For example:

toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345") === "12345" // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e") === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should
be pure,
i.e. it should not mutate the original
string.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSpace = exports.noSpace2 = exports.noSpace1 = exports.factorial2 = exports.factorial = exports.isIsogram3 = exports.isIsogram2 = exports.isIsogram = exports.duplicateEncode = exports.duplicateEncode2 = exports.stringToNumber3 = exports.stringToNumber2 = exports.stringToNumber = exports.accum3 = exports.accum2 = exports.accum = void 0;
function toAlternatingCase(s) {
    return s.split('')
        .map((e) => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
        .join('');
}
console.log(toAlternatingCase("hello world")); //"HELLO WORLD"
console.log(toAlternatingCase("HeLLo WoRLD")); //"hEllO wOrld"
console.log(toAlternatingCase("1a2b3c4d5e")); // 1A2B3C4D5E"
// CONVERT STRING TO ARRAY
/*

Write a function to split a string and
convert it into an array of words.
For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==>
["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
const stringToArray = (s) => s.split(' ');
console.log(stringToArray("Robin Singh")); //["Robin", "Singh"]
console.log(stringToArray("I love arrays they are my favorite"));
//["I", "love", "arrays", "they", "are", "my", "favorite"]
/*
THE COUPON CODE

Story
Your online store likes to give out
coupons for special occasions.
Some customers try to cheat the system
by entering invalid codes or using
expired coupons.

Task
Your mission:
Write a function called checkCoupon
which verifies that a coupon code is
valid and not expired.

A coupon is no more valid on the day
AFTER the expiration date. All dates
will be passed as strings in this
format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let current = new Date(currentDate);
    let expiration = new Date(expirationDate);
    return enteredCode === correctCode ? expiration >= current : false;
}
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); //true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); //false
/*
Square Every Digit

if we run 9119 through the function,
811181 will come out, because 92 is 81
and 12 is 1.
*/
class Kata {
    static squareDigits(num) {
        // we can use '+' insted 'Number', '+' mean the data will be numerical
        // return +(String(num).split('').map(a => Number(a)**2).join(''));
        return Number(String(num).split('').map(a => Math.pow(Number(a), 2)).join(''));
    }
}
console.log(Kata.squareDigits(9119)); //811181
// MUMBLING
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(str) {
    const inputLowerCase = str.toLowerCase();
    const inputAsArray = inputLowerCase.split('');
    const outputArray = inputAsArray.map((entry, index) => {
        const firstChar = entry.toUpperCase();
        const otherChars = entry.repeat(index);
        return `${firstChar}${otherChars}`;
    });
    return outputArray.join('-');
}
exports.accum = accum;
console.log(accum("abcd"));
//A-Bb-Ccc-Dddd
console.log(accum("RqaEzty"));
//R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
console.log(accum("cwAt"));
//C-Ww-Aaa-Tttt
const accum2 = (s) => s.split("")
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
exports.accum2 = accum2;
function accum3(s) {
    let result = s[0] || '';
    for (let i = 1; i < s.length; i++) {
        result += `-${s[i].toUpperCase() + s[i].toLowerCase().repeat(i)}`;
    }
    return result;
}
exports.accum3 = accum3;
// Convert a String to a Number!
const stringToNumber = (str) => Number(str);
exports.stringToNumber = stringToNumber;
console.log(exports.stringToNumber("1234")); //1234
const stringToNumber2 = (str) => parseInt(str);
exports.stringToNumber2 = stringToNumber2;
const stringToNumber3 = (str) => +str;
exports.stringToNumber3 = stringToNumber3;
// DUPLICATE ENCODER
// The goal of this exercise is to convert a string to a new string where 
// each character in the new string is "(" if that character appears 
// only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// a:
const duplicateEncode2 = (word) => ([...word.toLowerCase()]
    .map((currentValue, index, array) => (array.indexOf(currentValue) === array.lastIndexOf(currentValue) ? '(' : ')'))
    .join(''));
exports.duplicateEncode2 = duplicateEncode2;
// b:
function duplicateEncode(word) {
    const checkWrd = word.toLowerCase();
    return checkWrd.split('')
        .map(l => {
        return checkWrd.indexOf(l) !== checkWrd.lastIndexOf(l) ? ')' : '(';
    }).join('');
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode('patata')); // ()))))
console.log(duplicateEncode('din')); // (((
// ISOGRAMS
// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. 
// Implement a function that determines whether a string that 
// contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// isIsogram "Dermatoglyphics" == true
// isIsogram "aba" == false
// isIsogram "moOse" == false -- ignore letter case
// A:
function isIsogram(str) {
    //transform string to a Set to remove duplicates,
    //  resolve str to lowercase,
    //compare the size of the set to the length of the str
    return (new Set(str.toLowerCase())).size === str.length;
}
exports.isIsogram = isIsogram;
// B:
function isIsogram2(str) {
    const inputLowerCased = str.toLowerCase();
    const inputAsArray = inputLowerCased.split('');
    const inputAsSet = new Set(inputAsArray);
    return inputAsSet.size === inputLowerCased.length;
}
exports.isIsogram2 = isIsogram2;
// C:
function isIsogram3(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i + 1).includes(str[i])) {
            return false;
        }
    }
    return true;
}
exports.isIsogram3 = isIsogram3;
console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('aba')); //false
console.log(isIsogram('isogram')); //true
// FACTORIAL
function factorial(n) {
    let ret = 1;
    for (let i = n; i >= 1; --i) {
        ret *= i;
    }
    return ret;
}
exports.factorial = factorial;
function factorial2(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
exports.factorial2 = factorial2;
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(6)); //720
// REMOVE STRING SPACES
function noSpace1(x) {
    return x.replace(/\s/g, '');
}
exports.noSpace1 = noSpace1;
function noSpace2(x) {
    return x.split('')
        .filter(x => x !== ' ')
        .join('');
}
exports.noSpace2 = noSpace2;
function noSpace(x) {
    let str = x;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str = str.slice(0, i) + str.slice(i + 1);
            i--;
        }
    }
    return str;
}
exports.noSpace = noSpace;
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); //8j8mBliB8gimjB8B8jlB
//# sourceMappingURL=index.js.map