/** Write code that declares the following variables:
    - crafter should be set to the string “Taylor”
    - item should be set to the string “scarf”
    - color should be set to the string “red”
    - hours should be set to the number 5
    Then, create a fifth variable called summary that combines these variables to hold this exact string:
    “Taylor crocheted a red scarf in 5 hours.”
    Return the value stored in summary.
    Be sure to use the variables and not hard-code the values into the string. */

function redScarfSummary() {
    let crafter = "Taylor"; 
    let item = "scarf";
    let color = "red";
    let hours = 5;
    const summary = `${crafter} crocheted a ${color} ${item} in ${hours} hours.`;
    
    return summary;
}

/** passed test cases
  * */
