var endpoint = require("../index");

describe("loggly", function(){
	describe("debug()", function() {
		it("should work with level and message", function(done) {
			var log = {
				date: new Date(),
				pid: process.pid,
				level: "debug",
				origin: "origin",
				message: "message"
			};
			endpoint(true, true, true, true, "xxx", ["test"]).log(log, function(err) {
				if (err) {
					throw err;
				}
				done();
			});
		});
	});
});
