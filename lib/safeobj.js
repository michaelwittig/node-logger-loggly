module.exports =  function safeobj(obj, reservedKeys, deepness) {
	"use strict";

	if (deepness === undefined) {
		deepness = 0;
	}
	if (deepness > 20) {
		return obj;
	}

	var key;
	if (typeof obj === "object") {
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (reservedKeys[key] !== undefined) {
					obj[reservedKeys[key]] = obj[key];
					delete obj[key];
				}
				if (typeof obj[key] === "object") {
					obj[key] = safeobj(obj[key], reservedKeys, deepness + 1);
				}
			}
		}
	}
	return obj;
};
