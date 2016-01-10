// Functionall Classes
var Car = function(loc) {
	var obj = {loc:loc};
	obj.methods = function() { this.loc++; };
	return obj;
};

// Functional Subclass
var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function(){...}; // and other functions that make Van unique
	return obj;
};