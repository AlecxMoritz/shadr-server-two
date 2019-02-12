const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');

// update user info
router.put('/:id', (req, res) => {
    
});

// get user info by id
router.get('/:id', (req, res) => {
    
});

// get all users by id
router.get('/all', (req, res) => {
    User.findAll()
        .then(
            findSuccess = users => {
                console.log('user found successfully');
                res.status(200).json(users);
            },

            findFail = err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
});

// delete account
router.delete('/:id', (req, res) => {
    
});

module.exports = router;