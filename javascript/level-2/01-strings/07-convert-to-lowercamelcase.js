/** Write a function in JavaScript that takes in a string and converts it from snake_case to lowerCamelCase
    You should remove all underscores and just return the given value but in lower camel case where the first word starts with a lower case letter each following word starts with an uppercase letter. */

function snakeToLowerCamelCase(value) {
    const words = value.split('_');
    const camelCased = words[0].toLowerCase() + 
        words.slice(1).map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
    return caamelCased;
}

/** console test
function snakeToLowerCamelCase(value) {
    const words = value.split('_');
    console.log("Values split at \"_\" into array: " + words);
    const camelCased = words[0].toLowerCase() + 
        words.slice(1).map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
    console.log("Word at array index 0: " + words[0]);
    console.log("Words from array index 1: " + words.slice(1));
    return camelCased;
}

console.log(snakeToLowerCamelCase("hello_world_bye_self")); */

/** passed test cases
  * snakeToLowerCamelCase('very_verbose_function')
  * snakeToLowerCamelCase('return_result')
  * snakeToLowerCamelCase('simple')
  * snakeToLowerCamelCase('Starting_caps')
  * snakeToLowerCamelCase('test')
  * snakeToLowerCamelCase('get_thing') */
