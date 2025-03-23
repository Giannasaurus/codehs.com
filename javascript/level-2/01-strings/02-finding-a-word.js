/** In this exercise, you are given a phrase and a word. Return true if that word exists, false otherwise. Note, you do not need to use a loop. The word will not exist more than one time in the phrase.

    * Example:
      > findWord("The black cat was fast", "cat") --> true
      > findWord("Color was a new category", "cat") --> false
      > findWord("Tesla is a type of car", "car") --> true */

function findWord(phrase, word) {
    if (phrase.search(new RegExp(`\\b${word}\\b`)) !== -1) {
        return true;
    } else {
        return false;
    }
}

/** passed test cases
  * test case 1:
    > findWord("The black cat was fast", "cat")
  * test case 2:
    > findWord("Color was a new category", "cat")
  * test case 3:
    > findWord("Tesla is a type of car", "car")
  * test case 4:
    > 	findWord("Grace Hopper", "Hop") */
