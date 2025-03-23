/** Write a function that takes in a string and returns that same string with an “echo”. The returned string should include the contents of the original string twice, with a space in between.

  * Example:
    > echo("Hello World") --> "Hello World Hello World"
    > echo("Karel the Dog") --> "Karel the Dog Karel the Dog" */

function echo(phrase){
    return phrase+ " " + phrase
}

/** passed test cases
  * test case 1:
    > echo("Hello World")
  * test case 2:
    > echo("Coding is Awesome!")
  * test case 3:
    > echo("Grace Hopper")
  * test case 4:
    > echo("JavaScript, Java") */
