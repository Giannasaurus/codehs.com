/** Write a function that takes in a word or phrase. Return true if that word or phrase is all lowercase, otherwise return false.
  
  * Example:
    > isLowercase("CodeHS") --> false
    > isLowercase("school") --> true */

function isLowercase(phrase){
  if (phrase === phrase.toLowerCase()) {
    return true
  } else {
    return false
  }

/* one-liner version
  function isLowercase(phrase){
    return phrase === phrase.toLowerCase()
} */

/** passed test cases
  * test case 1:
    > isLowercase("hello")
  * test case 2:
    > isLowercase("Hi World!")
  * test case 3:
    > isLowercase("HEY!")
  * test case 4:
    > isLowercase("WHaT IS UP?")
  * test case 5:
    > isLowercase("KAREL THE DOG") */
