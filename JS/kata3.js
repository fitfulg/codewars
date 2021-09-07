// SAME AMOUNT OF CHARS IN A String

/*
Check to see if a string has the same amount 
of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
console.log(XO('xo')); //true
console.log(XO("xxxm")); //false
console.log(XO("ooom")); //false
console.log(XO("xxOo")); //true

// OPTION 2
const XO2 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// OPTION 3
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

// MUMBLING
/*
The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s) {
    return s.split('')
        .map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
        .join('-');
}

console.log(accum("ZpglnRxqenU"));
// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"  
console.log(accum("abcd"));
// "A-Bb-Ccc-Dddd"

// OPTION2
function accum(s) {
    return [...s].map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}


// Can you find the needle in the haystack?
// findNeedle(['hay', 'junk', 'hay', 'hay', 
// 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5"

// OPTION1
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// OPTION2
const findNeedle2 = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// OPTION 3
function findNeedle3(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'needle')
            return 'found the needle at position ' + i;
    }
}

// SUM ARRAY

// Write a method sum takes an array of numbers and 
// returns the sum of the numbers. 
// These may be integers or decimals.
// The numbers can also be negative. 
// If the array does not contain any numbers then you 
// should return 0.

// Examples
// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2
let array = [];
let res = 0;

function sum(array) {

    for (let i = 0; i < array.length; i++) {
        res = res + array[i];
    }
    return res;
}

/*
GET THE MIDDLE CHARACTER

You are going to be given a word. 
Your job is to return the middle 
character of the word. 
If the word's length is odd, 
return the middle character. 
If the word's length is even, 
return the middle 2 characters.

#Examples:

Kata.getMiddle("test") 
should return "es"

Kata.getMiddle("testing") 
should return "t"

Kata.getMiddle("middle") 
should return "dd"

Kata.getMiddle("A") 
should return "A"       
*/

function getMiddle(s) {
    //Code goes here!
    let len = s.length;
    if (len % 2) {
        return s[(len - 1) / 2];
    } else {
        return s[len / 2 - 1] + s[len / 2];
    }
}
console.log(getMiddle("middle")); //dd
console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); //t


// DELETE ZEROS

// Get rid of them. But only the 
// ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// OPTION 1

function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}

console.log(noBoringZeros(1450)); //145
console.log(noBoringZeros(960000)); //96
console.log(noBoringZeros(1050)); //105

// OPTION 2
function noBoringZeros(x) {
    let a = `${x}`.split('');
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == 0) {
            a.pop()
        } else {
            break
        }
    }
    return Number(a.join(''))
}
// OPTION 3
function noBoringZeros(x) {
    let a = `${x}`.split('');
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == 0) {
            a.pop()
        } else {
            break
        }
    }
    return Number(a.join(''))
}

// BREAK CAMEL CASE

//Complete the solution so that 
// the function will break up camel 
// casing, using a space between 
// words. 

// Example:
// solution("camelCasing") = "came Casing"

// OPTION 1
const solution = string => {
    return [...string].map((char) => {
        return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}

//  OPTION 2 
function solution2(string) {
    return string.replace(/(?=[A-Z])/g, " ")
}

// OPTION 3
function solution3(string) {
    let x = '';
    for (let i = 0; i < string.length; i++) {
        x += `${string[i] === string[i].toUpperCase() ? ' ' + string[i] : string[i]}`;
    }
    return x;
}

console.log(solution('camelCasing')); //camel Casing
console.log(solution('camelCasingTest')); //camel Casing Test

/*
SORT NUMBERS

Finish the solution so that 
it sorts the passed in array 
of numbers. If the function 
passes in an empty array or 
null/nil value then it 
should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); 
// should return [1,2,5,10,50]
solution(null); // should 
return []
*/
function solution4(nums) {
    return nums !== null ? nums.sort(function(a, b) { return a - b }) : [];
}

function solution5(arreglo) {
    if (arreglo == null || arreglo.length === 0) {
        return arreglo = [];

    }
    var n, aux;
    n = arreglo.length;
    for (let k = 1; k < n; k++) {

        for (let i = 0; i < (n - k); i++) {

            if (arreglo[i] > arreglo[i + 1]) {
                aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;

            }
        }
    }
    return arreglo;
}
console.log(solution5([1, 2, 10, 50, 5])); //[1, 2, 5, 10, 50]

/*
BUYING A CAR

A man has a rather old car 
being worth $2000. He saw a 
secondhand car being worth 
$8000. He wants to keep his 
old car until he can buy the 
secondhand one.

He thinks he can save $1000 
each month but the prices of 
his old car and of the new 
one decrease of 1.5 percent 
per month. Furthermore this 
percent of loss increases of 
0.5 percent at the end of 
every two months. Our man 
finds it difficult to make 
all these calculations.

Can you help him?

How many months will it take 
him to save up enough money 
to buy the car he wants, and 
how much money will he have 
left over?
*/
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    // Case 1 : the old man has enough money
    //   We return 0 for the number of month and the difference between the two prices
    if (startPriceOld >= startPriceNew) { return [0, Math.round(startPriceOld - startPriceNew)]; }

    // Case 2 : the old man doesn't have enough money
    // We initiate two variables, months for the number of months he's been waiting
    //   and total for the total money he has
    var months = 0,
        total = startPriceOld;

    // As long as the old man doesn't have enough money, we loop again for a new month
    while (total < startPriceNew) {
        // We add the savingperMonth for the new month
        total += savingperMonth;

        // We adjust the price of the old car
        total -= startPriceOld * percentLossByMonth / 100;

        // Applying the interest rate on the new car price and 
        startPriceNew -= startPriceNew * percentLossByMonth / 100;
        startPriceOld -= startPriceOld * percentLossByMonth / 100;

        // We increase the month counter
        months++;

        // Increasing the rate for all the even months (we use the increased rate immediately after month 1)
        //   So each time the numbers of passed months is odd, we increase the rate
        months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth;

    } // end while
    // Returning the number of months and what the old man has left after the purchase (rounded to units)
    return [months, Math.round(total - startPriceNew)];
}
console.log(nbMonths(2000, 8000, 1000, 1.5)); //[6, 766] 6 months and 766$ of money