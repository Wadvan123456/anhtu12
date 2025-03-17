const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');

router.get('/auth/resetPassword/:id', verifyToken, verifyAdmin, authController.resetPassword);
router.post('/auth/changePassword', verifyToken, authController.changePassword);

module.exports = router;
