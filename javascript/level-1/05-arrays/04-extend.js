/** Write the function extend which takes an array and an additional element and returns an array with the additional element at the end of the array.

  * For example,
    > extend([1,2,3], 4) => [1,2,3,4] */

function extend(array, el) {
    array.push(el)
    return array
}

/** passed test cases
  * test case 1:
    > extend([1,2,3], 4)
  * test case 2:
    > extend(['breakfast', 'lunch', 'dinner'], 'dessert')
  * test case 3:
    > extend(['aragorn', 'legolas', 'frodo'], 'gimli')
  * test case 4:
    > (hidden)
  * test case 5:
    > (hidden) */
