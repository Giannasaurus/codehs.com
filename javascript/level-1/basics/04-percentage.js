/** Write a function that takes in a number and a percentage and returns the percentage of that number. */

function percentageOfNumber(number, percentage){
  var num = number*(percentage/100)
  
  return num
}

/** passed test cases
  * test case 1:
    > percentageOfNumber(25, 5)
  * test case 2:
    > percentageOfNumber(400, 10)
  * test case 3:
    > percentageOfNumber(1000, 90) */
