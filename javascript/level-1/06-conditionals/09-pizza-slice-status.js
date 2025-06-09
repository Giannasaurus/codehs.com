/** Create a function sliceStatus that takes one parameter: a number slicesLeft.
    The function should return:
    - “All gone!” if slicesLeft is 0
    -“A few slices left” if slicesLeft is between 1 and 3 (inclusive)
    - “Plenty left” if slicesLeft is more than 3
*/

function sliceStatus(slicesLeft) {
	return slicesLeft === 0 ? "All gone!" :
	       slicesLeft > 3 ? "Plenty left" :
	       "A few slices left";
}

/** passed test cases
  * 
*/
