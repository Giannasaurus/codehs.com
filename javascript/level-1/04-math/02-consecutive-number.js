/** Write a function that takes in a number and either a + or a -.
    The function should return the consecutive number either after (+) or before (-) the number. */

function consNum(number, symbol) {
	return symbol==="+" ? ++number : --number
}

/** passed test cases
  * test case 1:
    > consNum(5, "+")
  * test case 2:
    > consNum(5, "-")
  * test case 3:
    > consNum(-2, "+")
  * test case 4:
    > consNum(-100, "-") */
