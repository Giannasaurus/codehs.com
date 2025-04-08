/** In this exercise, you are given a string with two words. You need to return a string with those two words switched.

    Example:
    > switchWords("Golden Bear") --> "Bear Golden"
    > switchWords("day snow") --> "snow day" */

function switchWords(phrase){
    return phrase.split(" ").reverse(" ").join(" ")
}

/** passed test cases
  * test case 1:
    > switchWords("golden bear")
  * test case 2:
    > switchWords("day snow")
  * test case 3:
    > switchWords("hello world") */
