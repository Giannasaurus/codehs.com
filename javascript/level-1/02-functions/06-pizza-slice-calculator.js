/*
Rearrange the lines to build a JavaScript program that defines and calls a function to calculate how many total pizza slices were eaten.

Each person ate 3 slices, and there were 4 people. The program should define a function that multiplies slices per person by number of people, returns the result, and then prints a message like:

Total slices eaten: 12

All variable names are generic. Only one correct ordering is possible.
*/

function f(x, y) {
    return x * y;
}

let a = f(3, 4);
let m = "Total slices eaten: " + a;

console.log(m);