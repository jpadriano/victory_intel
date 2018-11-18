'use strict';

/* Add development configurations here */
module.exports = {
    ENV: 'development',
    url: 'http://ec2-54-197-218-209.compute-1.amazonaws.com/',
    database: {
        host: '127.0.0.1',
        port: '3306',
        db: 'victory',
        user: 'newuser',
        password: 'password'
    },
    server: {
        host: 'http://ec2-54-197-218-209.compute-1.amazonaws.com/',
        port: 3000
    },
    messageBirdKey: {
        key: 'KPqpABNWnQMG54YcYgfCBl82r'
    },
    jwt: {
        secret: 'secret@victory'
    }
};