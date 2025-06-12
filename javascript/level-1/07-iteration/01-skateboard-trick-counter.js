/** Create a function trickAttempts that takes one parameter: a number tries.
    It returns a string of “Try again! ” repeated tries times using a while loop.
    Return an empty string if tries is 0 or less. */

function trickAttempts(tries) {
    let i = 0;
    let result = "";
    
    if (tries <= 0) return "";
    
    while (i < tries) {
        result += "Try again!\n";
        i++;
    }
    
    return result;
}

/** passed test cases
  *
*/
