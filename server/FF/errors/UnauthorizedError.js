/*
 * Copyright (C) 2015 TopCoder Inc., All Rights Reserved.
 */
/**
 * Unauthorized error
 *
 * @author      spanhawk
 * @version     0.0.1
 */
"use strict";


var HTTP_UNAUTHORIZED = 401;
var NAME = 'UnauthorizedError';

/**
 * Constructor

 * @param {String}      message       The authorization error message
 */
function UnauthorizedError(message) {
  // capture stack trace
  Error.call(this);
  Error.captureStackTrace(this);
  this.name = NAME;
  this.message = message;
  this.code = HTTP_UNAUTHORIZED;
}

require('util').inherits(UnauthorizedError, Error);
UnauthorizedError.prototype.name = 'UnauthorizedError';

/**
 * Module exports
 */
module.exports = UnauthorizedError;
