/** Write a function that takes in two numbers and checks if the sum of the two numbers is less than 100.
    The function should return either true or false. */

function lessThan100(a, b) {
	var sum = a+b
  return sum<100 ? true : false
}

/** passed test cases
  * test case 1:
    > lessThan100(30, 60)
  * test case 2:
    >	lessThan100(90, 20)
  * test case 3:
    > lessThan100(-100, 200)
  * test case 4:
    > lessThan100(-100, 199) */
