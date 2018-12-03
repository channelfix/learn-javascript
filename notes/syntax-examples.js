// is number odd?
var input = 12;

function isOdd(number) {
    return number % 2 === 1;
}

console.log(isOdd(input));
console.log(isOdd(13));



// is number less than 10?
function isNumberLessThan10(number) {
    return number < 10;
}

console.log(isNumberLessThan10(5));
console.log(isNumberLessThan10(15));



// convert number to roman numerals
function toRomanNumerals(number) {
    switch (number) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
    }
}

console.log(toRomanNumerals(7)); // 'VII'
console.log(toRomanNumerals(9)); // 'IX'


// double numbers
// input: array of numbers
// output: array of numbers, each number doubled
function doubleNumbers(arrayOfNumbers) {
    var doubledNumbers = [];
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        doubledNumbers[i] = arrayOfNumbers[i] * 2;
        // doubledNumbers.push(doubled);
    }
    return doubledNumbers;
}

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([4, 5, 6])); // [8, 10, 12]
