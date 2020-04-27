function log(output) {
   console.log(output);
   var node = document.createElement("p");
   var textnode = document.createTextNode(output);
   node.appendChild(textnode);
   document.getElementById("consoleOutput").appendChild(node);
}

// REQUIRED FEATURES

log(
   "1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10"
);
let arr = [3, 6, 7, 10];
log(arr);

log("2. Create a variable called 'myValue' with a value of the number 0");
let myValue = 0;
log(myValue);

log("3. Console log the value of the array at index 2");
log(arr[2]);

log("4. Remove the last item in the array, then console log the array");
arr.pop();
log(arr);

log("5. Add the value of number 15 to the end of the array");
arr.push(15);
log(arr);

log("6. Write a `for` loop that console logs each value in the array");
for (let i = 0; i < arr.length; i++) {
   log(arr[i]);
}

// STRETCH GOALS

log(
   "7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10"
);
while (myValue < 10) {
   myValue++;
   log(myValue);
}

log(
   "8. Change the second value in the array from 6 to 20, then console log the array"
);
arr[1] = 20;
log(arr);

log("9. Below, rewrite the `for` loop from question 6 to a `for of` loop");
for (let i of arr) {
   log(i);
}

log("And a forEach because I felt like it");
arr.forEach((i) => {
   log(i);
});

log(
   "10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array,\
and if the value of the array at `i` matches the value of 'myValue', also console log 'Hurray!'"
);
myValue = 3;
arr.forEach((i) => {
   log(i);
   if (i === myValue) {
      log("Hurray!");
   }
});

// All of the following challenges will use this array:
const numbersArray = [-1, 2, 15, -5, 7, 20];

log("11. Calculate (and console log) the sum of the numbers in the array.");
log(
   numbersArray.reduce(function (a, b) {
      return a + b;
   })
);

//ES6 Arrow method:

log(numbersArray.reduce((a, b) => a + b, 0));

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
   sum += numbersArray[i];
}

log(sum);

log("12. Find (and console log) the smallest number in the array.");
// hint: Use a loop to iterate through the array, comparing each value to the 'lowest number' so far.
// store this value in a variable, and console log this variable after the for loop is complete.

// or how about I just use Math.min? O.o
log(Math.min(...numbersArray));

// or the sort method..
const newNumbersArray = [-1, 2, 15, -5, 7, 20]; //NOTE: This method would interfere with question number 14 if I don't replace the current array.
newNumbersArray.sort(function (a, b) {
   return a - b;
}, 0);
log(newNumbersArray[0]);

// and a loop method for the hell of it.
var smallest = numbersArray[0];
for (let i = 0; i < numbersArray.length; i++) {
   if (numbersArray[i] < numbersArray[i + 1] && numbersArray[i] < smallest) {
      var smallest = numbersArray[i];
   }
}
log(smallest);

log(
   "13. Calculate (and console log) the sum of the squares of the numbers in the array."
);
// A square is just a number multiplied by itself (or raised to the second power, which is the same thing)
// example: sum of squares of [1,2,3] = (1*1+2*2+3*3) --> 1+4+9 --> 14
let arrayTotal = 0;

for (let i of numbersArray) {
   arrayTotal += i;
}

log(arrayTotal);

let exponentialSum = [];
numbersArray.forEach((i) => {
   let exponent = Math.pow(i, 2);
   exponentialSum.push(exponent);
});

log(exponentialSum.reduce((a, b) => a + b, 0));

log("14. Find (and console log) the first negative number in the array.");
// hint: to break out of a loop early, use the 'break'; operation
// https://www.w3schools.com/js/js_break.asp

for (let i of numbersArray) {
   if (i < 0) {
      log(i);
      break;
   }
}

log("15. Find (and console log) the first even number in the array.");
// hint: to see if a number is even, you can divide it by 2 and check the remainder.
// if the remainder is 0, the number is even. if the remainder is 1, the number is odd.
// To calculate the remainder, use the '%' operator.
// For Example:
// var remainder = 10 % 2; // remainder has the value 0 (10 / 2 is 5, with 0 remainder)
// var remainder = 11 % 2; // remainder has the value 1 (11 / 2 is 5, with 1 remainder)
// var remainder = 10 % 4; // remainder has the value 2 (10 / 4 is 2, with 2 remainder)
for (let i of numbersArray) {
   if (i % 2 == 0) {
      log(i);
      break;
   }
}

log("16. Find (and console log) the last even number in the array.");

for (let i = numbersArray.length - 1; i >= 0; i--) {
   if (numbersArray[i] % 2 == 0) {
      log(numbersArray[i]);
      break;
   }
}

//Or this..

numbersArray.reverse();
for (let i of numbersArray) {
   if (i % 2 == 0) {
      log(i);
      break;
   }
}
