/** Create a function formatFullName that takes three parameters: firstName, middleName, and lastName, all of which are strings.
    The function should return a single string that formats the full name in the format: ‘Last, First Middle’.
    If middleName is an empty string, omit it from the result (without extra spaces). */

function formatFullName(firstName, middleName, lastName) {
	if (middleName === "") {
	    return `${lastName}, ${firstName}`;
	} else {
	    return `${lastName}, ${firstName} ${middleName}`;
	}
}

/* using ternary operator
function formatFullName(firstName, middleName, lastName) {
    return `${lastName}, ${firstName}${middleName ? ' ' + middleName : ''}`;
} */

/** passed test cases
  * */
