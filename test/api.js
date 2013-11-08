var endpoint = require("../index");

describe("API", function(){
	describe("()", function() {
		it("should work without tags", function(){
			endpoint(true, true, true, true, "test");
		});
		it("should work with empty tags", function(){
			endpoint(true, true, true, true, "test", []);
		});
		it("should work with tags", function(){
			endpoint(true, true, true, true, "test", ["a"]);
		});
	});
});
