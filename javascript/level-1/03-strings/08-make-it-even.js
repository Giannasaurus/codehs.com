/** In this exercise, you are given a word or phrase.
    If the length of that word or phrase is odd, add a space to the end and return it.
    If it is even, just return it as is.
  
  * Example:
    > makeEven("Hi") --> "Hi"
    > makeEven("odd") --> "odd " 

YOOO THIS IS MY BEST ONE-LINER SO FAR, GOT IT FOR THE FIRST TRY!!! */

function makeEven(phrase){
    return phrase.length%2==0 ? phrase : phrase+" "
}

/** passed test cases
  * test case 1:
    > makeEven("hi")
  * test case 2:
    > makeEven("Hello")
  * test case 3:
    > makeEven("even")
  * test case 4:
    > makeEven("odd")
  * test case 5:
    > makeEven("Karel the Dog!")
  * test case 6:
    > makeEven("hi!") */
