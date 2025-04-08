/** In this exercise, you are given a string that contains should contain the word ‘Apple’, but some of the apples have only 1 ‘p’ and others have 3 ‘p’s. Return the corrected string containing an apple with 2 ‘p’s.

    Example:
    > badApples("Green Aple") --> "Green Apple"
    > badApples("Apple") --> "Apple"
    > badApples("Red Appple are good") --> "Red Apple are good" */

function badApples(phrase){
    return phrase.replace(/Ap+le/g, "Apple")
}

/** passed test cases
  * test case 1:
    > badApples("Green Aple")
  * test case 2:
    > badApples("Apple")
  * test case 3:
    > badApples("Red Appple are good") */
