/** As Commander of the Celestial Voyager, you must decide if its safe to blast off.
    Two crucial checks determine your fate:
    - Fuel Level must be at least 90% of capacity
    - Systems Check must be green (true)

    Your function launchDecision(fuelLevel, systemCheck) should return:
    - “Launch!” when both criteria are met
    - “Abort mission” if systems are offline
    - “Refuel needed” if fuel is below 50% but systems are online
    - “Stand by” for any other scenario (fuel between 50% and 90% with systems online)

  * Parameters:
    - fuelLevel (number) percentage from 0 to 100
    - systemCheck (boolean) true if all systems go

  * Return:
    - (string) your command to the crew

  * Example checks:
    > launchDecision(95, true);  // "Launch!"
    > launchDecision(45, true);  // "Refuel needed"
    > launchDecision(70, false); // "Abort mission"
    > launchDecision(60, true);  // "Stand by" */

function launchDecision(fuelLevel, systemCheck) {
  return !systemCheck ? "Abort mission" : // If systems offline, abort immediately
         fuelLevel >= 0.9 ? "Launch!" : // If fuel >= 90 and systems online
         fuelLevel < 0.50 ? "Refuel needed" : // If fuel < 50 and systems online
         "Stand by"; // Otherwise (fuel 50-90 and systems online)
}

/* before AI-refactor
function launchDecision(fuelLevel, systemCheck) {
	return !systemCheck ? "Abort mission" :
	       ((fuelLevel >= 0.9) && systemCheck) ? "Launch!" :
	       ((fuelLevel < 0.50) && systemCheck) ? "Refuel needed" :
	       ((fuelLevel >= 0.50 && fuelLevel <= 0.90) && systemCheck) ? "Standby"
} */

/** passed test cases
  * */
