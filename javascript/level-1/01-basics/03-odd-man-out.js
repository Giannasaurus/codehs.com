/** Write a function that takes in a number of people and a number of groups.
The people will be split up into the groups evenly (there might be left over people).
Return the number of people that are left over after creating the even groups. */

function leftOver(people, groups) {
    var remainingPeople = people%groups
    return remainingPeople
}

/** passed test cases
  * test case 1:
    > leftOver(25, 5)
  * test case 2:
    > leftOver(30, 4)
  * test case 3:
    > leftOver(100, 9) */
