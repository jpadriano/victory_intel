'use strict';

const _     = require('lodash');
const path  = require('path');

const config = {
    APP_NAME: 'victory',
    PORT: 3000,
    use: (env) => {
        _.assign(config, require(__dirname + '/env/' + env));
        return config;
    }
}
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';
module.exports = config.use(process.env.NODE_ENV);