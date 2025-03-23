/** In this exercise, you are given an input string and a key. The key will be lowercase, but you need to return the index value where that key is found as an uppercase value. If it is not found, return -1.

  * Example:
    > findUpperKey("CODE word", "code") --> 0
    > findUpperKey("computer science", "computer") --> -1 */

function findUpperKey(phrase, key){
    var upperKey = key.toUpperCase()
    
    if (phrase.includes(upperKey)) {
        return phrase.indexOf(upperKey)
    } else {
        return -1
    }
}

/* alternate solution
    function findUpperKey(phrase, key){
    var upperKey = key.toUpperCase()
    var index = phrase.indexOf(upperKey)
    
    return index !== -1 ? index : -1
} */

/** passed test cases
  * test case 1:
    > findUpperKey("CODE word", "code")
  * test case 2:
    > findUpperKey("computer science", "computer")
  * test case 3:
    > findUpperKey("Programming is AWESOME", "awesome")
  * test case 4:
    > findUpperKey("Hello World", "world") */
