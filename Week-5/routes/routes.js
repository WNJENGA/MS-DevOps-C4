const express = require('express');

const router = express.Router();

module.exports = router;

// CRUD routes
// C - Create
router.post('/teams', (req, res) => {
    res.send('POST');
});

// R - Read
router.get('/teams', (req, res) => {
    res.send('GET');
});

// U - Update
router.patch('/teams/:id', (req, res) => {
    res.send('UPDATE');
});

// D - Delete
router.delete('/teams/:id', (req, res) => {
    res.send('DELETE');
});