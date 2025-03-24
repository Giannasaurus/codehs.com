/** Write a function that takes in two numbers that represent the legs of a triangle and returns the length of the hypotenuse by using the Pythagorean theorem.
    The Pythagorean Theorem is a2 + b2 = c2. */

function pythagorean(a, b) {
    return Math.sqrt((a*a)+(b*b))
}

/** passed test cases
  * test case 1:
    > pythagorean(3, 4)
  * test case 2:
    > pythagorean(7, 24)
  * test case 3:
    > pythagorean(5, 6) */
