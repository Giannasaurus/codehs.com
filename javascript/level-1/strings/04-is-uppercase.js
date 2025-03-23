/** Write a function that takes in a word or phrase. Return true if that word or phrase is all uppercase, otherwise return false.

  * Example:
    > isUppercase("CodeHS") --> false
    > isUppercase("SCHOOL") --> true */

function isUppercase(phrase){
    if (phrase==phrase.toUpperCase()) {
        return true
    } else {
        return false
    }
}

/* one-liner version
    function isUppercase(phrase) {
    return phrase === phrase.toUpperCase();
} */

/** passed test cases
  * test case 1:
    > isUppercase("hello")
  * test case 2:
    > isUppercase("Hi World!")
  * test case 3:
    > isUppercase("HEY!")
  * test case 4:
    > isUppercase("WHaT IS UP?")
  * test case 5:
    > isUppercase("KAREL THE DOG") */
