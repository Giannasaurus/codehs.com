/** Create a function describeSpice that takes one parameter: a number spiceLevel.
    The function should return:
    - “Mild” if spiceLevel is less than 3
    - “Medium” if spiceLevel is 3 or more but less than 7
    - “Hot” if spiceLevel is 7 or more */

function describeSpice(spiceLevel) {
	return spiceLevel < 3 ? "Mild" :
	       spiceLevel >= 7 ? "Hot" :
	       "Medium";
}

/** passed test cases
  * 
*/
