/** Write a function called compareNumbers that takes two parameters: a and b (both numbers).
    The function should return the string “a is greater” if a is greater than b, “b is greater” if b is greater than a, or “equal” if they are the same. */

function compareNumbers(a, b) {
    if (a > b) {
        return "a is greater";
    } else if (b > a) {
        return "b is greater";
    } else {
        return "equal";
    }
}

/** passed test cases
  * compareNumbers(5, 3)
  * compareNumbers(2, 8)
  * compareNumbers(4, 4) */
