const router = require('express').Router();

// Returns which QR code was read
// Will redirect instead, when we have the right URLs
const qrRedirect = require('./api/qr-redirect');
router.use('/qr-redirect', qrRedirect);

module.exports = router;
