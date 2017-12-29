`````
                                                   ___
       __                                         /\_ \
  ___ /\_\    ___     ___   __  __    ___         \//\ \     ___      __      __      __   _ __
 /'___\/\ \ /' _ `\  / __`\/\ \/\ \  / __`\  _______\ \ \   / __`\  /'_ `\  /'_ `\  /'__`\/\`'__\
/\ \__/\ \ \/\ \/\ \/\ \L\ \ \ \_/ |/\ \L\ \/\______\\_\ \_/\ \L\ \/\ \L\ \/\ \L\ \/\  __/\ \ \/
\ \____\\ \_\ \_\ \_\ \____/\ \___/ \ \____/\/______//\____\ \____/\ \____ \ \____ \ \____\\ \_\
 \/____/ \/_/\/_/\/_/\/___/  \/__/   \/___/          \/____/\/___/  \/___L\ \/___L\ \/____/ \/_/
                                                                      /\____/ /\____/
                                                                      \_/__/  \_/__/
`````

[![NPM version](https://badge.fury.io/js/cinovo-logger-loggly.png)](http://badge.fury.io/js/cinovo-logger-loggly)
[![NPM dependencies](https://david-dm.org/michaelwittig/node-logger-loggly.png)](https://david-dm.org/michaelwittig/node-logger-loggly)
[![NSP Status](https://nodesecurity.io/orgs/michaelwittig/projects/2054d04d-ecdc-43b5-bde8-fed3888ff03f/badge)](https://nodesecurity.io/orgs/michaelwittig/projects/2054d04d-ecdc-43b5-bde8-fed3888ff03f)

# cinovo-logger-loggly

[Loggly](http://www.loggly.com) endpoint for [cinovo-logger](https://github.com/michaelwittig/node-logger).

## Getting started

### At first you must install and require the logger.

    npm install cinovo-logger

### Next you must require the module

`````javascript
var logger = require("cinovo-logger");
`````

### Append cinovo-logger-notificationcenter endpoint

	npm install cinovo-logger-loggly

In your JavaScript code append the console endpoint.

`````javascript
logger.append(require("cinovo-logger-loggly")(true, true, true, true, "customerToken", ["tag1", "tag2"]));
`````

### Log something

`````javascript
logger.debug("all values are ok");
logger.info("myscript", "all values are ok");
logger.error("myscript", "some values are not ok", {a: 10, b: 20});
logger.exception("myscript", "some values are not ok", new Error("error"));
logger.critical("myscript", "all values are not ok", {a: 10, b: 20}, function(err) { ... });
`````

### Done

Now you can log to [Loggly](http://www.loggly.com) endpoint.

## API

### (debug, info, error, critial, customerToken[, tags])

Sync creates a Notification Center Endpoint.

* `debug`: Boolean - true if the endpoint should log debug level
* `info`: Boolean - true if the endpoint should log info level
* `error`: Boolean - true if the endpoint should log error level
* `critical`: Boolean - true if the endpoint should log critical level
* `customerToken`: String - Loggly customer token (Can be found in the loggly console at Source Setup -> Customer Tokens)
* `tags`: Array[String] - Tags used by loggly (optional)

`return`: Endpoint - Endpoint - use the endpoint like this logger.append(endpoint)
