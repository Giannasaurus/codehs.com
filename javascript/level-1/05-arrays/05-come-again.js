/** Write the function repeat that takes an array and returns that array repeated.

  * For example:
    > repeat(["echo"]) => ["echo", "echo"] */

function repeat(array) {
    return array.concat(array)
}

/** passed test cases
  * test case 1:
    > repeat(["echo"])
  * test case 2:
    > repeat(["hello?"])
  * test case 3:
    > repeat([])
  * test case 4:
    > repeat([1, 2, 3])
  * test case 5:
    > (hidden)
  * test case 6: 
    > (hidden) */
