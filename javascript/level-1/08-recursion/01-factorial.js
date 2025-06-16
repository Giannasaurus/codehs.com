/**
  * Write a function to calculate the factorial of a number!
  * Example: 5! = 5 * 4 * 3 * 2 * 1 = 120
    > Input: 5
    > Expected Output: 120
  */

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

/**
  * passed test cases
  * factorial(5)
  * factorial(10)
  * factorial(1)
  */
