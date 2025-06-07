/** Youve uncovered the legendary Golden Skull treasure chest on Skull Island, but its magically locked! Only those who utter the secret passphrase can open it.
    Your job is to write a function openChest(passphrase) that checks the phrase and returns either:

    “Chest opened!” if the secret passphrase is "goldenkey"
    “Access denied!” for anything else
  
  * Parameters:
    - passphrase (string) the word adventurers attempt to speak

  * Return:
  - A status message (string) indicating success or failure

  * Example usage:
    > openChest("goldenkey"); // "Chest opened!"
    > openChest("rustykey");   // "Access denied!" */

function openChest(passphrase) {
	return passphrase === "goldenkey" ? "Chest opened!" : "Access denied!";
}

/** passed test cases
  * */
