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

function toAlternatingCase(s: string): string {
    return s.split('')
      .map((e: string) => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
      .join('');
  }

console.log(toAlternatingCase("hello world")) //"HELLO WORLD"
console.log(toAlternatingCase("HeLLo WoRLD")) //"hEllO wOrld"
console.log(toAlternatingCase("1a2b3c4d5e")) // 1A2B3C4D5E"

// CONVERT STRING TO ARRAY
/*

Write a function to split a string and 
convert it into an array of words. 
For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> 
["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

const stringToArray = (s: string) => s.split(' ');

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

function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  let current = new Date(currentDate);
  let expiration = new Date(expirationDate);
  return enteredCode === correctCode ? expiration >= current : false;
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); //true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); //false

/* 
Square Every Digit

if we run 9119 through the function, 
811181 will come out, because 92 is 81 
and 12 is 1.
*/

class Kata {
  static squareDigits(num: number) {

  // we can use '+' insted 'Number', '+' mean the data will be numerical
  // return +(String(num).split('').map(a => Number(a)**2).join(''));
  return Number(String(num).split('').map(a => Number(a)**2).join(''));
  }
}

console.log(Kata.squareDigits(9119)); //811181

// MUMBLING

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

export function accum(str: string): string {
  const inputLowerCase = str.toLowerCase()
  const inputAsArray = inputLowerCase.split('')
  const outputArray = inputAsArray.map((entry, index) => {
    const firstChar = entry.toUpperCase()
    const otherChars = entry.repeat(index)
    return `${firstChar}${otherChars}`
  })
  return outputArray.join('-')
  
}
console.log(accum("abcd"));
//A-Bb-Ccc-Dddd
console.log(accum("RqaEzty"));
//R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
console.log(accum("cwAt"));
//C-Ww-Aaa-Tttt

export const accum2 = (s: string): string => 
  s.split("")
    .map((x: string, i: number) => 
      x.toUpperCase() + x.toLowerCase().repeat(i)
    )
    .join("-");

export function accum3(s: string): string {
  let result: string = s[0] || '';
  for (let i = 1; i < s.length; i++) {
    result += `-${s[i].toUpperCase() + s[i].toLowerCase().repeat(i)}`;
    }
  return result;
    }

// Convert a String to a Number!
export const stringToNumber = (str: string): number => Number(str);

console.log(stringToNumber("1234")); //1234

export const stringToNumber2 = (str: string): number => parseInt(str);

export const stringToNumber3 = (str: string): number => +str;


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
export const duplicateEncode2 = (word: string):string => (
  [...word.toLowerCase()]
    .map((currentValue:string, index:number, array:string[]):string => (
      array.indexOf(currentValue) === array.lastIndexOf(currentValue) ? '(' : ')'
    ))
    .join('')
);

// b:
export function duplicateEncode(word: string){
  const checkWrd = word.toLowerCase();
  return checkWrd.split('')
    .map(l => {
      return checkWrd.indexOf(l) !== checkWrd.lastIndexOf(l) ? ')' : '(';
    }).join('');
}

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
export function isIsogram (str: string): boolean {
  //transform string to a Set to remove duplicates,
  //  resolve str to lowercase,
  //compare the size of the set to the length of the str
  return (new Set(str.toLowerCase())).size === str.length
}

// B:
export function isIsogram2(str: string){
  const inputLowerCased = str.toLowerCase()
  const inputAsArray = inputLowerCased.split('')
  const inputAsSet = new Set(inputAsArray)
  return inputAsSet.size === inputLowerCased.length
}

// C:
export function isIsogram3(str: string): boolean {
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1).includes(str[i])) {
      return false;
    }
  }
  
  return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('aba')); //false
console.log(isIsogram('isogram')); //true

// FACTORIAL

export function factorial(n: number) {
  let ret = 1;
  for (let i = n; i >= 1; --i) {
      ret *= i;
  }
  return ret;
}

export function factorial2(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n-1)
}

console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(6)); //720

// REMOVE STRING SPACES
export function noSpace1(x:string):string {
  return x.replace(/\s/g, '');
}

export function noSpace2(x:string):string {
  return x.split('')
    .filter(x => x !== ' ')
    .join('');
}

export function noSpace(x:string):string {
  let str: string = x;
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str = str.slice(0, i) + str.slice(i + 1);
      i--;
    } 
  }
  return str;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); //8j8mBliB8gimjB8B8jlB
