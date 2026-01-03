/** Write a function followerGoal that takes two parameters: currentFollowers (an integer) and newFollowers (an integer).
    Return the total number of followers after gaining double the newFollowers amount. */

function followerGoal(currentFollowers, newFollowers) {
    let totalFollowers = currentFollowers + newFollowers*2;
    
    return totalFollowers;
} 

/** passed test cases
  * followerGoal(500, 50)
  * followerGoal(1000, 100)
  * followerGoal(300, 0)
  * followerGoal(750, 25) */
