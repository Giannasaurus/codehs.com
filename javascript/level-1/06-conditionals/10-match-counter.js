/** You are given five individual integer values: a, b, c, d, and e, as well as a target integer called target.
    Write a function countMatches that determines how many of the five values are equal to the target.
    The function should take six parameters:
    - a (integer)
    - b (integer)
    - c (integer)
    - d (integer)
    - e (integer)
    - target (integer)

    It should return the number of parameters that match the value of target. */

function countMatches(a, b, c, d, e, target) {
    let count = 0;
    if (a === target) count++;
    if (b === target) count++;
    if (c === target) count++;
    if (d === target) count++;
    if (e === target) count++;
    return count;
}

/** passed test cases
  * countMatches(1, 2, 3, 4, 5, 3)
  * countMatches(7, 7, 7, 7, 7, 7)
  * countMatches(0, 1, 2, 3, 4, 5)
  * countMatches(9, 8, 7, 6, 5, 10)
  * countMatches(5, 3, 5, 2, 5, 5)
*/
