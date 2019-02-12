const router = require('express').Router();
const User = require('../db').import('../models/user');

// sign up
router.post('/', (req, res) => {

});

// log in
router.post('/login', (req, res) => {
    
});

// update user info
router.put('/:id', (req, res) => {
    
});

// get user info by id
router.get('/:id', (req, res) => {
    
});

// get all users by id
router.get('/all', (req, res) => {
    
});

// delete account
router.delete('/:id', (req, res) => {
    
});

module.exports = router;