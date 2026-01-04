/*
Rearrange the lines to build a JavaScript program that tracks how many tokens a player has at the end of a theme park game and calculates the total dollar value.

The player starts with 50 tokens
Spends 12 on a game
Wins back 20 tokens
Each token is worth $0.25
Final output:
Value: $14.5

Variable names are intentionally generic. Only one correct order is possible.
*/

let x = 50 - 12;
let y = x + 20;
let z = y * 0.25;
let m = "Value: $" + z;

console.log(m);