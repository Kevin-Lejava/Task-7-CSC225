function reverseThisString(str) {
    console.log(str.split("").reverse().join(""));
}

reverseThisString("Hello World!");

function swapCase(str) {

    var array = str.split("");

    for (var i = 0; i < array.length; i++) {

        if (array[i] == array[i].toUpperCase())
            console.log(array[i].toLowerCase());

        else
            console.log(array[i].toUpperCase());
    }

}

swapCase("Hello World!");

function toCelcius(element) {
    return (element - 32) * (5 / 9);
}

var array = [23, 32, 41, 50, 59];

console.log(array.map(toCelcius));


function passOrFail(element) {

    if (element <= 75)
        return true;

    else if (element > 75)
        return false;
}

var arrayAgain = [20, 30, 50, 80, 90, 100];

console.log(arrayAgain.map(passOrFail));

function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var i = -1;

    console.log(germanNumbers.map(function () {
        i++;
        return `${germanNumbers[i]} is ${cardinalNumbers[i]}`
    }));
}

germanNumbers()

function primeNumbers(prime) {

    if (prime == 2)
        return prime;

    var check;
    for (var i = 2; i < prime; i++) {
        if (prime % i == 0) {
            return null;
        }
        else
            return prime;

    }
}


var thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(thirdArray.filter(primeNumbers));


function checkMultiples() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        else if (i % 3 == 0)
            console.log("CSC225 RULES");
        else if (i % 5 == 0)
            console.log("I LOVE JAVASCRIPT")
        else
            console.log(i);

    }
}


checkMultiples();