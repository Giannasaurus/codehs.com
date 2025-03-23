/** Write a function that takes a string and a key as input. You should return true if the key exists in the index, false otherwise. Assume both the string and key have a length > 0.

  * Example:
    > findKey("Hello Word", "l") --> true
    > findKey("Ursa Major", "bear") --> false */

function findKey(phrase, key){
    return phrase.includes(key)
}

/** passed test cases
  * test case 1:
    > findKey("Hello", "l")
  * test case 2:
    > findKey("computer science", "a")
  * test case 3:
    > findKey("Grace Hopper", "ac")
  * test case 4:
    > findKey("Alan Turing", "e") */
