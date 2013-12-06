var endpoint = require("../index");

var LOGGLY_CUSTOMER_TOKEN = "XXX";

describe("loggly", function() {
	"use strict";
	describe("debug()", function() {
		it("should work with level and message", function(done) {
			var log = {
				date: new Date(),
				pid: process.pid,
				level: "debug",
				origin: "origin",
				message: "message"
			};
			endpoint(true, true, true, true, LOGGLY_CUSTOMER_TOKEN, ["test"]).log(log, function(err) {
				if (err) {
					throw err;
				}
				done();
			});
		});
	});
});
