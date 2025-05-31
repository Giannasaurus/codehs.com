/** Write a function called canVote that takes one parameter: age (a number).
    The function should return true if the age is 18 or older, and false otherwise. */

function canVote(age) {
  if (age >= 18) {
      return true;
  } else {
      return false;
  }
}

/** passed test cases
  * canVote(20)
  * canVote(17)
  * canVote(18) */
