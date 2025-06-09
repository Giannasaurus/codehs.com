/** Write a function canEnterFestival that takes two parameters: hasTicket (a boolean) and age (an integer).
    The function should return true if the person has a ticket and is 18 or older.
    Otherwise, it should return false. */

function canEnterFestival(hasTicket, age) {
    return hasTicket && age >= 18 ? true : false;
}

/** passed test cases
  * canEnterFestival([true, 20])
  * canEnterFestival([false, 22])
  * canEnterFestival([true, 17])
  * canEnterFestival([false, 16])
  * canEnterFestival([true, 18])
*/
