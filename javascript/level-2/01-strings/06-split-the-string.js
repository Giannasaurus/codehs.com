/** In this exercise, you are given a word.
    You should return the string with two dashes added to the middle of the string.
    If the string is an even length, return both dashes in the middle together.
    If the string has an odd length, the two dashes should surround the middle letter.4
    
    * Example:
      > splitWord("even") --> "ev--en"
        splitWord("friends") --> "fri-e-nds" */

function splitWord(word) {
    let len = word.length;
    let half = Math.floor(len / 2);

    if (len % 2 === 0) {
        return word.slice(0, half) + "--" + word.slice(half);
    } else {
        return word.slice(0, half) + "-" + word[half] + "-" + word.slice(half + 1);
    }
}

/** passed test cases
  * splitWord("even")
  * splitWord("friends")
  * splitWord("hello")
  * splitWord("introduction") */
