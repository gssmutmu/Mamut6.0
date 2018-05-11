const session = require('smartux-connect');
session.api.restsample = require('Mamut');
require('./client/login');
require('./client/site');
session.start();