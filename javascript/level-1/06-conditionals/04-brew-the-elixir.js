/** Deep within the Arcane Laboratory, Apprentice Alina mixes mysterious ingredients to brew powerful elixirs.
    Depending on the combination she uses, different potions form:
    - Invisibility Potion when "frogspawn" meets "newteye"
    - Life Elixir when "mandrake" combines with "phoenixfeather"
    - Mysterious Brew for any other duo
    
    Your task: implement brewPotion(ingredient1, ingredient2) that returns the correct potion name.

  * Parameters:
    - ingredient1 (string)
    - ingredient2 (string)

  * Return:
    - (string) the potion Alina ends up with

  * Examples:
    > brewPotion("frogspawn", "newteye");       // "Invisibility Potion"
    > brewPotion("mandrake", "phoenixfeather"); // "Life Elixir"
    > brewPotion("frogspawn", "phoenixfeather"); // "Mysterious Brew" */

function brewPotion(ingredient1, ingredient2) {
	if (ingredient1 === "frogspawn" && ingredient2 === "newteye") {
	    return "Invisibility Potion";
	} else if (ingredient1 === "mandrake" && ingredient2 === "phoenixfeather") {
	    return "Life Elixir";
	} else {
	    return "Mysterious Brew";
	}
}

/* using ternary operator
function brewPotion(ingredient1, ingredient2) {
	return ingredient1 === "frogspawn" && ingredient2 === "newteye" ? "Invisibility Potion" : ingredient1 === "mandrake" && ingredient2 === "phoenixfeather" ? "Life Elixir" : "Mysterious Brew";
	}
} */

/** passed test cases
  * */
