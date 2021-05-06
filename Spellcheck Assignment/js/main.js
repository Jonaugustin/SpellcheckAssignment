// Spell Check Start Code
"use strict";
// Global Variables
let dictionary;
let aliceWords;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();


//Functions
function linearWord() {
    //Display Search Type used on user screen
    document.getElementById("search").innerHTML = "Linear Search";

    //Initalize start time, create variables to store posiiton and one to store response
    let startTime = performance.now();
    let response;
    let index = linearSearch(dictionary, document.getElementById("wordcheck").value.toLowerCase());

    //Check if desired word is in dicitonary, and assign response 
    if (index > -1) {
        response = "The word: '" + dictionary[index] + "' is found at positon " + index + "."; 
    } else {
        response = "'"+document.getElementById("wordcheck").value+"'" + " is " + "not found in dictionary.";
    }

    //Calculate time elapsed during operation
    let endTime = performance.now();
    let timeElapsed = endTime - startTime;

    //Output this information to user
    document.getElementById("found").innerHTML = response;
    document.getElementById("time").innerHTML = timeElapsed;
}

function binaryWord() {
    //No need to sort dictionary, as it is already sorted
    //Display Search Type used on user screen
    document.getElementById("search").innerHTML = "Binary Search";

    //Initalize start time, create variables to store posiiton and one to store response
    let startTime = performance.now();
    let response;
    let index = binarySearch(dictionary, document.getElementById("wordcheck").value.toLowerCase());

    //Check if desired word is in dicitonary, and assign response 
    if (index > -1) {
        response = "The word: '" + dictionary[index] + "' is found at positon " + index + "."; 
    } else {
        response = "'"+document.getElementById("wordcheck").value+"'" + " is " + "not found in dictionary.";
    }

    //Calculate time elapsed during operation
    let endTime = performance.now();
    let timeElapsed = endTime - startTime;

    //Output this information to user
    document.getElementById("found").innerHTML = response;
    document.getElementById("time").innerHTML = timeElapsed;
}

function linearAlice() {
    //Display Search type used on user screen
    document.getElementById("alicesearch").innerHTML = "Linear Search";

    //Initalize start time, and set variable to count words not found
    let startTime = performance.now();
    let unfound = 0;
    //Loop through all the words in Alice Words, to see if they are found in the dictionary
    for (let i = 0; i < aliceWords.length; i++) {
        let index = linearSearch(dictionary, aliceWords[i].toLowerCase());
        if (index < 0) {
            //Output to console words that are not found, increase number of words not found
            console.log("'" + aliceWords[i] + "'" + " is not found in dictionary.");
            unfound++;
        }
    }

    //Calculate time elapsed uring operation
    let endTime = performance.now();
    let timeElapsed = endTime - startTime;

    //Output this information to user
    document.getElementById("aliceword").innerHTML = " " +unfound + " words.";
    document.getElementById("alicetime").innerHTML = timeElapsed;
}

function binaryAlice() {
    //Display Search type used on user screen
    document.getElementById("alicesearch").innerHTML = "Binary Search";

    //Initalize start time, and set variable to count words not found 
    let startTime = performance.now();
    let unfound = 0;
    //Loop through all the words in Alice Words, to see if they are found in the dictionary
    for (let i = 0; i < aliceWords.length; i++) {
        let index = binarySearch(dictionary, aliceWords[i].toLowerCase());
        if (index < 0) {
            //Output to console words that are not found, increase number of words not found
            console.log("'" + aliceWords[i] + "'" + " is not found in dictionary.");
            unfound++;
        }
    }

    //Calculate time elapsed uring operation
    let endTime = performance.now();
    let timeElapsed = endTime - startTime;

    //Output this information to user
    document.getElementById("aliceword").innerHTML = " " +unfound + " words.";
    document.getElementById("alicetime").innerHTML = timeElapsed;
}
//Search Functions
function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++){
        if (anArray[i] == item) {
            return i;
        } 
    }
    return -1;
}
function binarySearch(anArray, item) {
    //Set lower and upper index
    let li = 0;
    let ui = (anArray.length-1);
    //Determine if search should continue
    while (ui >= li) {
        //Set middle index
        let mi = Math.floor((li + ui)/2);
        //Check for matches
        if (item == anArray[mi]) {
            //Item has been found
            return mi;
        } else if (item < anArray[mi]) {
            //Eliminate right portion 
            ui = mi - 1;
        } else {
            //Eliminate left portion 
            li = mi + 1;
        }
    }
    //If item is not found
    return -1;
}

//Event Listeners
document.getElementById("lsw").addEventListener("click", linearWord);
document.getElementById("bsw").addEventListener("click", binaryWord);
document.getElementById("lsa").addEventListener("click", linearAlice);
document.getElementById("bsa").addEventListener("click", binaryAlice);
// NOTE: Remember that the dictionary is all lowercase words
// So when checking if a word is in the dictionary, convert the word to lowercase
// Example: let index = linearSearch(dictionary, word.toLowerCase())