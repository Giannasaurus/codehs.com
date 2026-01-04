/** In this exercise, you are given a word or phrase.
    If the length of that word or phrase is even, add a space to the end and return it.
    If it is odd, just return it as is.

  * Example:
    > makeOdd("Hi") --> "Hi "
    > makeOdd("odd") --> "odd" */

function makeOdd(phrase){
    return phrase.length%2==1 ? phrase : phrase+" "
}

/** passed test cases
  * test case 1:
    > makeOdd("hi")
  * test case 2:
    > makeOdd("Hello")
  * test case 3:
    > makeOdd("even")
  * test case 4:
    > makeOdd("odd")
  * test case 5:
    > makeOdd("Karel the Dog!")
  * test case 6:
    > makeOdd("hi!") */
