/** Lines are perpendicular if their slopes are negative reciprocals.
    Write a function that takes in the numerators and denominators of the slope of two lines and checks if the lines are perpendicular.
    The function should return either true or false.

    Given two fractions, a⁄b = c⁄d , lines are perpendicular if a⁄b = - d⁄c . */

function linesArePerp(a, b, c, d) {
    return a/b===-d/c ? true : false
}

/** passed test cases
  * test case 1:
    > linesArePerp(1, 4, -4, 1)
  * test case 2:
    > linesArePerp(5, 3, 3, -5)
  * test case 3:
    > linesArePerp(2, 6, 6, 2)
  * test case 4:
    > linesArePerp(4, 5, -4, 5) */
