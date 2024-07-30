// HW Minimum

// 1 TASK
function greet() {
    console.log("Hello, world!");
}

const greet = function() {
    console.log("Hello, world!");
};


// 2 TASK
function countArguments() {
    console.log(arguments.length);
}

// 
countArguments(); // 0
countArguments(1); // 1

// 3 TASK 
function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareNumbers(3, 5)); // Вывод: -1
console.log(compareNumbers(10, 2)); // Вывод: 1
console.log(compareNumbers(7, 7)); // Вывод: 0

// 4 TASK
function factorial(n) {
    if (n < 0) {
        return "Invalid input: n must be a non-negative integer.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040
console.log(factorial(-3)); // Invalid.

// 5 TASK
function combineDigits(digit1, digit2, digit3) {
    if ([digit1, digit2, digit3].every(d => d >= 0 && d <= 9)) {
        return parseInt(`${digit1}${digit2}${digit3}`, 10);
    } else {
        return "All inputs must be single digits (0-9).";
    }
}

console.log(combineDigits(1, 4, 9)); // 149
console.log(combineDigits(2, 5, 3)); // 253


// 6 TASK 
function calculateArea(length, width) {
   
    if (width === undefined) {
        
        return length * length;
    } else {
       
        return length * width;
    }
}

console.log(calculateArea(5)); // Вывод: 25 (площадь квадрата)
console.log(calculateArea(5, 3)); // Вывод: 15 (площадь прямоугольника)

