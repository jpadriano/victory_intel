'use strict';

const body_parser       = require('body-parser');
const compression       = require('compression');
const express           = require('express');
const app               = express();
const server            = require('http').Server(app);
const config            = require('./config/configuration');

/* set environment configuration */
app.set('env', config.ENV);

/* express app configuration */
app.set('case sensitive routing', true);
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(compression());

/* API routes */
app.use('/api/v1', require(`${__dirname}/config/router`)(express.Router()));

server.listen(config.PORT,function() {
    console.log('Express server listening on port ' + server.address().port);
});
