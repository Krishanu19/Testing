// Router
const express = require('express');
const router = express.Router();

// Other requirements
const path = require('node:path');

// Complete route is: /api/qr-redirect/:id
router.get('/:id', async (req, res) => {
  console.log('QR Code scanned. ID is: ', req.params.id);
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Export route
module.exports = router;
