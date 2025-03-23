/** Write a function that takes in a number and checks if the number is divisible by 10.
    The function should return either true or false. */

function divisibleByTen(num) {
    if (num%10==0) {
        return true
    } else {
        return false
    }
}

/* one-liner version
    function divisibleByTen(num) {
    return num%10===0;
} */

/** passed test cases
  * test case 1:
    > divisibleByTen(100)
  * test case 2:
    > divisibleByTen(25)
  * test case 3:
    >	divisibleByTen(-50)
  * test case 4:
    > divisibleByTen(47) */
