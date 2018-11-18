'use strict';

const importer  = require('anytv-node-importer');
const __        = importer.dirloadSync(__dirname + '/../controllers');

module.exports = (router) => {

    router.get('/', (req, res) => {return res.json({
        message: 'Welcome to the Victory REST API.'
    })});
    
    /* Account controller */
	router.get('/users/register',                                             __.account.register);
    // router.post('/users/login',                                             __.account.login);
    // router.post('/users/logout',                                            __.account.logout);
    // router.post('/users/post',                      __.auth.verifyToken,    __.account.post);
    // router.post('/users/verify',                    __.auth.verifyToken,    __.account.verify);
    // router.put('/users/resendVerificationCode',     __.auth.verifyToken,    __.account.resend_verification_code);
    // router.put('/users/changePassword',             __.auth.verifyToken,    __.account.change_password);
    // router.put('/users/sendPasswordResetCode',                              __.account.send_password_reset_code);
    // router.post('/storage/upload',                  __.auth.verifyToken,    __.storage.upload);
    return router;
}