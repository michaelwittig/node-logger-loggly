var safeobj = require("../lib/safeobj"),
	assert = require("assert-plus");

describe("safeobj", function() {
	"use strict";
	describe("()", function() {
		it("no changes to empty object with empty reserved words", function(){
			assert.deepEqual({}, safeobj({}, {}));
		});
		it("no changes to empty object with reserved word", function(){
			assert.deepEqual({}, safeobj({}, {"message": "msg"}));
		});
		it("no changes to flat object with reserved word", function(){
			assert.deepEqual({"a": 1, "b": 2}, safeobj({"a": 1, "b": 2}, {"message": "msg"}));
		});
		it("changes to flat object with reserved word", function(){
			assert.deepEqual({"a": 1, "b": 2, "msg": 3}, safeobj({"a": 1, "b": 2, "message": 3}, {"message": "msg"}));
		});

		it("no changes to deep object with reserved word", function(){
			assert.deepEqual({"a": 1, "b": 2, "c": {"d": 4}}, safeobj({"a": 1, "b": 2, "c": {"d": 4}}, {"message": "msg"}));
		});
		it("changes to deep object with reserved word", function(){
			assert.deepEqual({"a": 1, "b": 2, "msg": 3, "c": {"d": 4, "msg": 5}}, safeobj({"a": 1, "b": 2, "message": 3, "c": {"d": 4, "message": 5}}, {"message": "msg"}));
		});
		it("changes to deep object with reserved words", function(){
			assert.deepEqual({"a": 1, "b": 2, "msg": 3, "c": {"d": 4, "msg": 5}}, safeobj({"a": 1, "b": 2, "message": 3, "c": {"d": 4, "message": 5}}, {"message": "msg", "message2": "msg2"}));
		});
	});
});
