/** Write a function that takes in a number of people and a number of groups.
    The people will be split up into the groups evenly (there might be left over people).
    Return the number of people in each group.
    Hint: Use Math.floor() to make sure the result is an integer. */

function splitGroups(people, groups) {
    groups = people/groups
    return Math.floor(groups)
}

/* an alternate solution
    function splitGroups(people, groups) {
    let groupSize = people / groups;
    return Math.floor(groupSize);
} */

/** passed test cases
  * test case 1:
    > splitGroups(25, 5)
  * test case 2:
    > splitGroups(30, 4)
  * test case 3:
    > splitGroups(100, 9) */
