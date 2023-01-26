const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log('About route');
        res.status(200).json({ status: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

