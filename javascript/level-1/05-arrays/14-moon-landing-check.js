/** Write a function check_moon_landing that takes a boolean parameter landed and a number parameter altitude.
    The function should return ‘Successful mission’ if the astronaut has landed on the moon (landed is true) and the altitude is less than or equal to 100.
    Otherwise, return ‘Mission failed’. */

function check_moon_landing(landed, altitude) {
	return landed && altitude <= 100 ? "Successful mission" : "Mission failed";
}

/** passed test cases
  * */
