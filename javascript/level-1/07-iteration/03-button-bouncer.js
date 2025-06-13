/** 
  * In a game, a player presses a button repeatedly.
  * The button only counts every 4th press as a valid bounce.
  * Write a function countValidBounces that takes in the total number of button presses and returns how many valid bounces occurred.
  * The function should take one parameter:
    - presses (integer)
  * It should return the number of bounces (every 4th press).
  */

function countValidBounces(presses) {
    let i = 0;
    let valid = 0;
    
    while (i < presses) {
        i++
        if (i%4===0) {
            valid++;
        }
    }
    
    return valid;
}

/** alternate solutions
function countValidBounces(presses) {
    return Math.floor(presses / 4);
}

function countValidBounces(presses) {
    let valid = 0;
    for (let i = 4; i <= presses; i += 4) valid++;
    return valid;
}
*/

/*
 * passed test cases
 * countValidBounces(10)
 * countValidBounces(3)
 * countValidBounces(16)
 * countValidBounces(0)
 * countValidBounces(25)
 */
