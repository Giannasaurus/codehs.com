/** Write a function that takes in a string and returns a string that triples the original.
The returned string should include the contents of the original string three times, with a space in between.

  * Example:
    > repeatThree("Hello World") --> "Hello World Hello World Hello World"
    > repeatThree("Karel the Dog") --> "Karel the Dog Karel the Dog Karel the Dog" */

function repeatThree(phrase){
    return phrase + " " + phrase + " " + phrase
}

/* using repeat()
   function repeatThree(phrase) {
    return (phrase + " ").repeat(3).trim();
}

   using Array.join()
   function repeatThree(phrase) {
    return Array(3).fill(phrase).join(' ');
} */

/** passed test cases
  * test case 1:
    > repeatThree("Hello World")
  * test case 2:
    > repeatThree("Coding is Awesome!")
  * test case 3:
    > repeatThree("Grace Hopper")
  * test case 4:
    > repeatThree("JavaScript, Java") */
