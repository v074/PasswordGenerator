// Generator Functions

// Function that returns a random index of a string value that is passed in as an argument.
function randomIndex(str){
    return Math.floor(Math.random()*str.length)
}

// Function that returns a random letter using a random index in the "letters" string varaible
function randomLetter(){
    const letters=`abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}

// Uses "randomLetter" function to get a letter, sets it to its uppercase equivalent and returns it.
function getRandomUpper(){
    return randomLetter().toUpperCase();
}

// Uses "randomLetter" function to retrieve a letter, and returns it.
function getRandomLower(){
    return randomLetter();
}

// Returns a random string integer value between 0 and 9.
function getRandomNumber(){
    const numbers=`1234567890`;
    return numbers[randomIndex(numbers)];
}

function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=<>/,.';
    return symbols[randomIndex(symbols)];
}