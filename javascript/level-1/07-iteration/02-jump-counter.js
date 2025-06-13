/**
 * You’re practicing long jumps in gym class.
 * Each jump adds 3 meters to your total distance.
 * Write a function countJumpsNeeded that determines how many jumps it takes to reach or exceed a certain distance.
 * The function should take one parameter:
   - distance (integer)
 * It should return the number of jumps needed to reach or exceed that distance.
 */

function countJumpsNeeded(distance) {
    let jumps = 0;
    let total = 0;
    
    while (total < distance) {
        jumps++;
        total += 3;
    }
    
    return jumps;
}

/* alternate solution
function countJumpsNeeded(distance) {
    return Math.ceil(distance / 3);
}
*/

/** 
 * passed test cases
 * countJumpsNeeded(10)
 * countJumpsNeeded(1)
 * countJumpsNeeded(15)
 * countJumpsNeeded(9)
 * countJumpsNeeded(0)
 */
