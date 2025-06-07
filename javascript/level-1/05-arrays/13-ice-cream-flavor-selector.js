/** Write a function getFavoriteFlavors that takes no parameters.
    Inside the function, create an array called flavors containing the following five strings: ‘vanilla’, ‘chocolate’, ‘strawberry’, ‘mint’, and ‘cookie dough’.
    The function should return an array containing the first and last flavors in the list. */

function getFavoriteFlavors() {
    const flavors = ["vanilla", "chocolate", "strawberry", "mint", "cookie dough"];
    const favoriteFlavors = [flavors[0], flavors[flavors.length-1]];
    return favoriteFlavors;
}

/** passed test cases
  * getFavoriteFlavors([])
    > expected result: ["vanilla","cookie dough"]
    > my result: ["vanilla","cookie dough"] */
