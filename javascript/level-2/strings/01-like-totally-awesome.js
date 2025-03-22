/** In this exercise, you are given a word or phrase and you need to return that word or phrase with the word ‘like’ in front of it.
    If the phrase already starts with like, you should not add another one, just return the phrase as is.
  
    * Example:
      > like("totally awesome") --> "like totally awesome"
      > like("like cool dude") --> "like cool dude"
      > like("I like you") -->"like I like you" */

function like(phrase){
    const like="like ";
    
    // if phrase starts with word like
    if(phrase.split(" ")[0]==="like"){
        return phrase;
    // 
    }else{
        return like+phrase;
    };
}

/* an even simpler solution --chatgpt
function like(phrase) {
    return phrase.startsWith("like") ? phrase : "like "+phrase
} */

/** passed test cases
  * test case 1:
    > like("totally awesome")
  * test case 2:
    > like("like cool dude")
  * test case 3:
    > like("I like you") */
