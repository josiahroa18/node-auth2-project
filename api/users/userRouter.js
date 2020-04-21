const express = require('express');
const router = express.Router();
const User = require('./userModel');

router.get('/', (req, res) => {
    User.getUsers()
    .then(users => {
        res.status(201).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;