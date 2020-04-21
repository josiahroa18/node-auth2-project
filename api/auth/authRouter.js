const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../users/userModel');

router.post('/register', (req, res) => {
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bcrypt.hashSync(req.body.password, rounds);
    req.body.password = hash;

    User.addUser(req.body)
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;