/** Write a function that takes in two integers.
    The function will check if the first integer is divisible by the second integer and return either true or false. */

function divisibleByNumber(n, d) {
    return n%d===0 ? true : false
}

/** passed test cases
  * test case 1:
    > divisibleByNumber(25, 5)
  * test case 2:
    > divisibleByNumber(30, 4)
  * test case 3:
    > divisibleByNumber(100, 9)
  * test case 4:
    > divisibleByNumber(100, 10) */
