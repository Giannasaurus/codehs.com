/** Welcome to Mystical Brews, the premier potion shop in the Enchanted Forest!
    Loyal customers receive magical discounts on their healing elixirs.
    Write a function applyDiscount(goldCoins) that:
    - Checks how many coins a customer has
    - If they have 20 or more coins, subtract 5 coins as a special discount
    - Otherwise, keep their total unchanged
    
  * Parameters:
    - goldCoins (number) the coins on hand

  * Return:
    - The final coin count (number) after applying any discount

  * Try it out:
    > applyDiscount(25); // 20  (25 - 5)
    > applyDiscount(20); // 15  (20 - 5)
    > applyDiscount(19); // 19
    > applyDiscount(5);  // 5 */

function applyDiscount(goldCoins) {
	return goldCoins >= 20 ? goldCoins - 5 : goldCoins;
}

/** passed test cases
  * */
