'use strict';

/* Add development configurations here */
module.exports = {
    ENV: 'development',
    url: 'http://127.0.0.1:3000',
    database: {
        host: '127.0.0.1',
        port: '3306',
        db: 'victory',
        user: 'root',
        password: 'root'
    },
    server: {
        host: '127.0.0.1',
        port: 3000
    },
    messageBirdKey: {
        key: 'KPqpABNWnQMG54YcYgfCBl82r'
    },
    jwt: {
        secret: 'secret@victory'
    },
    s3: {
        directory: '../temp/',
        bucket_name: 'bingwit',
        iam_user_key: 'AKIAIXWVD3VMGKJ5WSXQ',
        iam_user_secret: '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'
    }
};