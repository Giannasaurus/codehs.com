/** In this exercise, you are given a phrase that starts with ‘A’. If the word after ‘A’ begins with a vowel, add an ‘n’ after the ‘A’, otherwise return the phrase as is.

    Example:
    > grammar("A word") --> "A word"
    > grammar("A excellent word") --> "An excellent word" */

function grammar(phrase) {
    if (!phrase.startsWith("A ")) return phrase; 

    const nextWord = phrase.split(" ")[1];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(nextWord[0].toLowerCase())) {
        return "An " + phrase.slice(2);
    }
    
    return phrase;
}

/** passed test cases
  * test case 1:
    > grammar("A elephant walked by.")
  * test case 2:
    > grammar("A word")
  * test case 3:
    > grammar("A excellent word") */
