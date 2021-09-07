// SORT THE ODD
/*
You have an array of numbers.
Your task is to sort ascending 
odd numbers but even numbers 
must be on their places.

Zero isn't an odd number and 
you don't need to move it. If 
you have an empty array, you 
need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
 */

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
/*
EXPLANATION:
First it extract all the odd 
numbers and sort it in 
ascending order, 
then it just replace every odd 
number in the original array 
with the element in the array odd. 
*/

// OPTION2
function sortArray2(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function(a, b) {
        return a - b;
    });

    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}
console.log(sortArray2([5, 3, 2, 8, 1, 4]));
/*
// FORM THE MINIMUM

Given a list of digits, 
return the smallest number 
that could be formed from 
these digits, using the 
digits only once (ignore duplicates).

Notes:
Only positive integers will 
be passed to the function (> 0 ), 
no negatives or zeros.

// Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

// OPTIONLOL
function minValue(values) {
    let isBefore = Boolean();
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        isBefore = false;
        for (let j = 0; j < i; j++) {
            if (values[i] === values[j]) {
                isBefore = true;
                break;
            }
        }
        if (!isBefore) {
            arr.push(values[i])
        }
    }
    arr = arr.sort();
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    result = parseInt(result);
    return result;
}
console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
console.log(minValue([5, 6, 9, 9, 7, 6, 4])); //45679
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); //134679
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])); //356789
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //1

// OPTION 2
function minValue2(values) {
    const n = values
        .filter((currValue, index, arr) => arr.indexOf(currValue) === index)
        .sort()
        .join('');
    return Number(n);
}

// OPTION 3
function minValue3(values) {
    return parseInt([...new Set(values)].sort().join(''))
}

// TWO-SUM
/*
The input will always be valid
(numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two different items from that array). 

twoSum[1, 2, 3] 4 === (0, 2) //1+3
twoSum[2, 2, 3] 4 === (0, 1) //2+2

*/

// OPTION 1
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// OPTION 2
function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const diff = target - num;

        if (numbers.indexOf(diff) !== -1) {
            return [i, numbers.lastIndexOf(diff)];
        }
    }
}

// Multi-tap Keypad Text Entry on an Old Mobile Phone
/*
Prior to having fancy 
iPhones, teenagers would 
wear out their thumbs 
sending SMS messages on 
candybar-shaped feature 
phones with 3x4 numeric 
keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------

In order to send the message 
"WHERE DO U WANT 2 MEET L8R" 
a teen would have to 
actually do 47 button 
presses. No wonder they 
abbreviated.

Test.assertEquals(presses("LOL"), 9)
Test.assertEquals(presses("HOW R U"), 13)

*/

// LOL OPTION
function presses(phrase) {
    phrase.toLowerCase();
    var array = phrase.toLowerCase().split('');
    var pressedTimes = 0;

    for (var i = 0; i < array.length; i++) {
        switch (array[i]) {
            case ' ':
                pressedTimes += 1;
                break;
            case 'a':
                pressedTimes += 1;
                break;
            case 'b':
                pressedTimes += 2;
                break;
            case 'c':
                pressedTimes += 3;
                break;
            case 'd':
                pressedTimes += 1;
                break;
            case 'e':
                pressedTimes += 2;
                break;
            case 'f':
                pressedTimes += 3;
                break;
            case 'g':
                pressedTimes += 1;
                break;
            case 'h':
                pressedTimes += 2;
                break;
            case 'i':
                pressedTimes += 3;
                break;
            case 'j':
                pressedTimes += 1;
                break;
            case 'k':
                pressedTimes += 2;
                break;
            case 'l':
                pressedTimes += 3;
                break;
            case 'm':
                pressedTimes += 1;
                break;
            case 'n':
                pressedTimes += 2;
                break;
            case 'o':
                pressedTimes += 3;
                break;
            case 'p':
                pressedTimes += 1;
                break;
            case 'q':
                pressedTimes += 2;
                break;
            case 'r':
                pressedTimes += 3;
                break;
            case 's':
                pressedTimes += 4;
                break;
            case 't':
                pressedTimes += 1;
                break;
            case 'u':
                pressedTimes += 2;
                break;
            case 'v':
                pressedTimes += 3;
                break;
            case 'w':
                pressedTimes += 1;
                break;
            case 'x':
                pressedTimes += 2;
                break;
            case 'y':
                pressedTimes += 3;
                break;
            case 'z':
                pressedTimes += 4;
                break;
            case '1':
                pressedTimes += 1;
                break;
            case '2':
                pressedTimes += 4;
                break;
            case '3':
                pressedTimes += 4;
                break;
            case '4':
                pressedTimes += 4;
                break;
            case '5':
                pressedTimes += 4;
                break;
            case '6':
                pressedTimes += 4;
                break;
            case '7':
                pressedTimes += 5;
                break;
            case '8':
                pressedTimes += 4;
                break;
            case '9':
                pressedTimes += 5;
                break;
            case '0':
                pressedTimes += 2;
                break;
        }
    }
    return pressedTimes;
}

// OPTION 2
function presses(phrase) {

    var x = '';
    x = phrase.replace(/[2-9]/ig, 4)

    x = x.replace(/[ADGJMPTW1 ]/ig, 1)

    x = x.replace(/[BEHKNQUX0]/ig, 2)

    x = x.replace(/[CFILORVY]/ig, 3)

    x = x.replace(/[SZ]/ig, 4)

    return x.split('')
        .map(function(a) { return parseInt(a) }).reduce(function(a, b) { return a + b })

}