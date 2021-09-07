/*
SHORTEST WORD

Given a string of words, return 
the length of the shortest word(s).

String will never be empty and 
you do not need to account for 
different data types.  */

// option 1
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3

// EXTRACT THE DOMAIN NAME FROM A URL
/*
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

// LOL OPTION
function domainName(url) {
    let arr1 = [...url];
    let arr2 = [];
    let ping = false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == '/') {
            ping = true;
            i += 2;
        } else if (arr1[i] == "." && !ping) {
            i = 0;
            ping = true;
        }
        if (ping) {
            arr2.push(arr1[i]);
        }
        if (i == arr1.length - 1 && !ping) {
            i = -1;
            ping = true;
        }
    }
    ping = false;
    let arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[0] == "w" && arr2[1] == "w" && arr2[2] == "w" && !ping) {
            i = 4;
            ping = true;
        }
        if (arr2[i] == ".") {
            return makeStr(arr3);
        }
        arr3.push(arr2[i]);
    }

}

function makeStr(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

// OPTION2 
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

// OPTION 3
function domainName(url) {
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

console.log(domainName("http://google.com")); //google
console.log(domainName("www.xakep.ru")); //xakep
console.log(domainName("https://youtube.com")); //youtube

/*
WHO LIKES IT?

Implement a function likes :: 
[String] -> String, which must 
take in input array, containing 
the names of people who like an 
item. It must return the display 
text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

// OPTION 1

function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return names[0] + ' likes this';
            break;
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            break;
        default:
            return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

console.log(likes([])); //no one likes this

console.log(likes(['Peter'])); //Peter likes this

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //Alex, Jacob and 2 others like this

// SORT ARRAY BY STRING LENGTH

/* 
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the 
following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array 
passed to your function will be 
different lengths, so you will not 
have to decide how to order 
multiple strings of the same length.
*/

function sortByLength(array) {
    return [...array].sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"])); //["I", "To", "Beg", "Life"]

// OPTION 2
let orderByLength = (a, b) => {
    if (a.length > b.length) return 1;
    else if (a.length < b.length) return -1;
    return 0;
}

let sortByLength2 = arr => arr.sort(orderByLength);

/*  
HIGHEST SCORING WORD

Given a string of words, you need 
to find the highest scoring word.

Each letter of a word scores 
points according to its position 
in the alphabet: 
a = 1, b = 2, c = 3 etc.

You need to return the highest 
scoring word as a string.

If two words score the same, 
return the word that appears 
earliest in the original string.

All letters will be lowercase and 
all inputs will be valid.
*/

// OPTION1
function high(x) {
    var words = x.split(' ');

    //create a new array of size words and initalize each to 0.
    var scores = new Array(words.length).fill(0);

    //loop through each word then through each letter.
    words.forEach(function(word, x) {
        for (var i = 0; i < word.length; i++) {
            // you can use base 36 to convert letter there respected number.
            scores[x] += parseInt(word[i], 36) - 9;
        }
    });

    //Use max and apply to get largest score and find associated word.
    return words[scores.indexOf(Math.max(...scores))];

}
console.log(high('man i need a taxi up to ubud')); //taxi
console.log(high('what time are we climbing up the volcano')); //volcano
console.log(high('take me to semynak')); //semynak

// OPTION2
function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const words = x.split(' ');
    let result = words[0];
    let maxScore = 0;

    words.forEach(word => {
        let score = 0;

        for (var i = 0; i < word.length; i++) {
            score += (alphabet.indexOf(word[i]) + 1);
        }

        if (score > maxScore) {
            maxScore = score;
            result = word;
        }

    });

    return result;
}

/* SORTED? YES? NO? HOW?

Complete the method which accepts 
an array of integers, and returns 
one of the following:

"yes, ascending" - if the numbers 
in the array are sorted in an 
ascending order
"yes, descending" - if the numbers 
in the array are sorted in a 
descending order
"no" - otherwise
You can assume the array will 
always be valid, and there will 
always be one correct answer.
*/
// option1
function isSortedAndHow(array) {
    var ans;
    if (array[1] > array[0]) {
        ans = "yes, ascending";
    }

    if (ans === "yes, ascending") {
        for (var i = 1; i < array.length; i++) {
            if (array[i] >= array[i - 1]) {
                ans = "yes, ascending";
            } else return ans = "no";
        }
    }
    if (ans !== "yes, ascending") {
        for (var i = 1; i < array.length; i++) {
            if (array[i] <= array[i - 1]) {
                ans = "yes, descending";
            } else return ans = "no";
        }
    }
    return ans;
}

// option2
function isSortedAndHow(array) {
    let asc = true;
    let des = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) des = false;
        if (array[i] < array[i - 1]) asc = false;
    }
    return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
}

/*  
REMOVE ANCHOR FORM URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 
*/

// OPTION 1
function removeUrlAnchor(url) {
    return url.split('#')[0];
}
/*
explanation:
url = "http://www.url.com/hey.html#end";
url.split('#') === ["http://www.url.com/hey.html", "end"];
url.split('#')[0] === "http://www.url.com/hey.html"
*/

// OPTION 2
function removeUrlAnchor(url) {
    return url.replace(/#.*/gi, "");
}

// OPTION 3
function removeUrlAnchor(url) {
    let string = ""
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") { break }
        string += url[i]
    }
    return string
}