const express = require('express')
const app = express();

require('./api/hello.js')(app)
require('./libs/cors.js')(app)
require('./libs/start.js')(app)

