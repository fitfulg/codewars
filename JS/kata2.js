// RETURN HIGHEST AND LOWEST NUMBER IN A STRING
// In this little assignment you are given a string of space separated numbers, and 
// have to return the highest and lowest number.

// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// OPTION 1
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `Highest: ${max}
Lowest: ${min}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// OPTION 2
function highAndLow2(numbers) {
    return `Highest: ${Math.max.apply(null, numbers.match(/-?\d+/g))} 
Lowest: ${Math.min.apply(null, numbers.match(/-?\d+/g))}`;
}
console.log(highAndLow2("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// FIND THE DIVISORS
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
// (except for 1 and the number itself),from smallest to largest. 
// If the number is prime return the string '(integer) is prime'.

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// OPTION1
function divisors(integer) {
    var divs = [];

    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }

    return divs.length ? divs : integer + ' is prime';
};
console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));

// OPTION2
function divisors2(integer) {
    var divisors = [...Array(integer).keys()]
        .slice(2, integer)
        .filter(div => integer % div == 0);
    return divisors.length > 0 ? divisors : `${integer} is prime!`;
};
console.log(divisors2(15));
console.log(divisors2(12));
console.log(divisors2(13));

// DNA
// Deoxyribonucleic acid (DNA) is a chemical found in 
// the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other,
//  as "C" and "G". 
// You have function with one side of the DNA 
//you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all.

let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, x => pairs[x]);

console.log(DNAStrand2("AAAA"));
//   TTTT
console.log(DNAStrand2("ATTGC"));
//   TAACG
console.log(DNAStrand2("GTAT"));
//   CATA


// OPTION2
function DNAStrand2(dna) {
    var res = "";
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                res += "T";
                break;
            case 'T':
                res += "A";
                break;
            case 'G':
                res += "C";
                break;
            case 'C':
                res += "G";
                break;
        }
    }
    return res;
}
console.log(DNAStrand2("AAAA"));
//   TTTT
console.log(DNAStrand2("ATTGC"));
//   TAACG
console.log(DNAStrand2("GTAT"));
//   CATA


// MASK THE LAST FOUR CHARACTERS
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');

// option2 (best choice):
function maskify2(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify2('1'), '1');
console.log(maskify2('11111'), '#1111');


// REVERSE WORDS (
// Complete the function that accepts a string parameter, 
// and reverses each word in the string. 
// All spaces in the string should be retained.
function reverseWords(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' '); //pure art....
}
console.log(reverseWords("Eric Ramos Cardona"));

// STRING REPEAT
// Write a function called repeat_str 
// which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str += s;
    }
    return str;
}
console.log(repeatStr(5, "Hello")); //HelloHelloHelloHelloHello
console.log(repeatStr(4, "ha")); // hahahaha

// CLOCK
// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000
function past(h, m, s) {
    var hours = h * 60 * 60 * 1000;
    var minutes = m * 60 * 1000;
    var seconds = s * 1000;

    return hours + minutes + seconds;
}
console.log(`${past(0, 1, 1)} milliseconds`); //61000 milliseconds

// OPTION 2
function past2(h, m, s) {
    return (h * 60 * 60 + m * 60 + s) * 1000;
}
console.log(`${past2(0, 1, 1)} milliseconds`); //61000 milliseconds

// OPTION3
function past3(h, m, s) {
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);

    return Math.round(setTime - midnight);
}
console.log(`${past3(0, 1, 1)} milliseconds`); //61000 milliseconds


// REVERSED SEQUANCE
// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};

console.log(reverseSeq(5)); //Array(5)     (desc)

// OPTION2
const reverseSeq2 = length => Array.from({ length }, () => length--)

console.log(reverseSeq2(5)); //Array(5)     (desc)

// OPTION3
const reverseSeq3 = n => {
    return n < 2 ? n : [n].concat(reverseSeq(n - 1));
};

console.log(reverseSeq3(5)); //Array(5)     (desc)

// CENTURY FROM YEAR
// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

const century = year => Math.ceil(year / 100) //using ceiling method to round up to nearest century (100)
console.log(century(1899)); //19
console.log(century(1984)); //20

// SUM MIXED ARRAY
// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
    // Unary plus converts to number
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
    return x.map(a => +a).reduce((a, b) => a + b);
}
console.log("SUM MIXED ARRAY: " + sumMix([9, 3, '7', '3'])); // 22
console.log("SUM MIXED ARRAY: " + sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42

// OPTION2 
function sumMix2(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

console.log("SUM MIXED ARRAY: " +
    sumMix2([9, 3, '7', '3'])); // 22
console.log("SUM MIXED ARRAY: " + sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42

/*
FLATTEN AND SORT AN ARRAY

Given a two-dimensional 
array of integers, return 
the flattened version of the 
array with all the integers 
in the sorted (ascending) 
order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your 
function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

// OPTION1
function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
}
console.log(flattenAndSort([])); //[]
console.log(flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5]
])); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([
    [1, 3, 5],
    [100],
    [2, 4, 6]
])); //[1, 2, 3, 4, 5, 6, 100]

//OPTION2
function flattenAndSort2(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
    }
    return newArray.sort((a, b) => a - b);
}
/*
LOVE VS FRIENDSHIP

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice 
stronger than love :-)

The input will always be in 
lowercase and never be empty.
// */
// OPTION 1
function wordsToMarks(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
        marks += alphabet.indexOf(char) + 1;
    });
    return marks;
}
console.log(wordsToMarks("attitude")); // 100
console.log(wordsToMarks("family")); // 66

// option2
function wordsToMarks(str) {
    var sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) - 96;
    return sum;
}