//   Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// EASYMODE:
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
// LOLMODE:
function boolToWord2(bool) {
  return ["No", "Yes"][+bool];
}
/*
+bool converts the Boolean to an integer. false = 0, true = 1.

['No','Yes'] is a list with "No" being index 0, and "Yes" being index 1.

Putting an integer in square brackets next to the list gets the item at that index. Since, the Boolean is converted to an integer, it is used to access the list by giving the index of the item.

Example 1:

boolToWord(true)

bool  = true
+bool = 1

['No','Yes'][+bool]
['No','Yes'][1]     -> "Yes"
*/
console.log(boolToWord(true)); // Yes
console.log(boolToWord(false)); // No

// Summation :
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
/*
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
const summation = (num) => {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
    console.log(i);
  }

  return result;
};
// MATHMODE:
function summation2(num) {
  return (num * (num + 1)) / 2;
}

console.log(summation(2)); //3

// PRINT ERRORS
// You have to write a function printer_error which given
// a string will return the error rate of the printer as a
// string representing a rational whose numerator is the
// number of errors (error means that a vocal out from
//a to m is detected) and the denominator the length of the
// control string. Don't reduce this fraction to a simpler
// expression.
/*
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

function printerError2(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

console.log(printerError("aaaabbbccdxyzddd")); // '3/13'