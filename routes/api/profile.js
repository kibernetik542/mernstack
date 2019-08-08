const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

module.exports = router;