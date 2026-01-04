/*
You’re planning a movie night! Rearrange the following lines of JavaScript code to create a function called isMovieNight that takes two arguments and returns whether there is a movie night. The function should return true if you have popcorn AND the movie is less than 150 minutes long, otherwise it should return false.
*/

function isMovieNight(p, l) {
    let s = l < 150;
    return p && s;
}