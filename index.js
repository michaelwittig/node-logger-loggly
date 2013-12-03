var util = require("util"),
	request = require("request"),
	lib = require("cinovo-logger-lib"),
	assert = require("assert-plus");

function LogglyEndpoint(debug, info, error, critial, customerToken, tags) {
	assert.string(customerToken, "customerToken");
	assert.optionalArrayOfString(tags, "tags");
	lib.Endpoint.call(this, debug, info, error, critial, "loggly");
	this.uri = "http://logs-01.loggly.com/inputs/" + customerToken;
	tags = tags || [];
	tags.push("cinovo-logger");
	if (tags.length > 0) {
		this.uri += "/tag/" + tags.join(",") + "/";
	}
}
util.inherits(LogglyEndpoint, lib.Endpoint);
LogglyEndpoint.prototype._log = function(log, callback) {
	request({
		"uri": this.uri,
		"method": "POST",
		"body": lib.safejson(log),
		"headers": {
			"Content-type": "application/json"
		}
	}, function (err, res) {
		if (err) {
			callback(err);
		} else {
			if (res.statusCode == 200) {
				callback();
			} else {
				callback(new Error("invalid status code"));
			}
		}
	});
};
LogglyEndpoint.prototype._stop = function(callback) {
	callback();
};

module.exports = function(debug, info, error, critical, customerToken, tags) {
	return new LogglyEndpoint(debug, info, error, critical, customerToken, tags);
};
