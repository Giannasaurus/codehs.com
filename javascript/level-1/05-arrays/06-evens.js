/** Write the function evens that takes an array and returns an array of the even elements. */

function evens(array) {
    return array.filter(function(num) {
        return num%2===0
    })
}

/** passed test cases
  * test case 1:
    > evens([1, 2, 3, 4])
  * test case 2:
    > evens([2, 4, 6, 8])
  * test case 3:
    > evens([1, 3, 5, 7])
  * test case 4:
    > evens([2, 2, 2, 2])
  * test case 5:
    > (hidden)
  * test case 6:
    > (hidden) */
