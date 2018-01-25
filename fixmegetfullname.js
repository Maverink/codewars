// The code provided is supposed return a person's
//  Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null
//  (None in Python), but may be empty.

// Task
// Fix the bug so we can all go home early.


function Dinglemouse(firstName, secondName) {
	if (firstName != "" && secondName != "") {
		this.firstName = firstName;
		this.secondName = " " + secondName;
	} else {
		this.firstName = firstName;
		this.secondName = secondName;
	}
}

Dinglemouse.prototype.getFullName = function() {
	return this.firstName + this.secondName;
};