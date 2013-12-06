var util = require("util"),
	request = require("request"),
	lib = require("cinovo-logger-lib"),
	assert = require("assert-plus");

function LogglyEndpoint(debug, info, error, critial, customerToken, tags) {
	"use strict";
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
	"use strict";
	request({
		"uri": this.uri,
		"method": "POST",
		"body": lib.safejson(log),
		"headers": {
			"Content-type": "application/json"
		},
		"pool": {
			"maxSockets": 50 // the point here is that nodejs limits the amount of sockets in the pool per _host_. because we send all logs to one host the default of 5 sockets can become a serious bottleneck. we still want to benefit from having a pool so 50 might be a reasonable value.
		}
	}, function (err, res) {
		if (err) {
			callback(err);
		} else {
			if (res.statusCode === 200) {
				callback();
			} else {
				callback(new Error("invalid status code"));
			}
		}
	});
};
LogglyEndpoint.prototype._stop = function(callback) {
	"use strict";
	callback();
};

module.exports = function(debug, info, error, critical, customerToken, tags) {
	"use strict";
	return new LogglyEndpoint(debug, info, error, critical, customerToken, tags);
};
