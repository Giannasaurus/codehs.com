/** A pitcher’s ERA (earned runs average) is calculated by multiplying the earned runs times total innings in the game (usually 9) and then dividing by the total innings that the pitcher pitched.
    Write a function that assumes that there were 9 innings in the game and takes in two numbers that represent the earned runs and the innings pitched.
    The function should return the ERA. */

function era(er, ip) {
	var ERA = er*9/ip;
	return ERA;
}

/** passed test cases
  * era(2, 7)
  * era(1, 6)
  * era(7, 8)
  * era(3, 3) */
