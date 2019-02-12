const router = require('express').Router();
const Dislike = require('../db').import('../models/dislike');

// get dislikes by user id
router.get('/user/:id', (req, res) => {

});

// get by id
router.get('/:id', (req, res) => {

});

// add dislike
router.post('/:id', (req, res) => {

});

// remove dislike
router.delete('/:id', (req, res) => {

});

module.exports = router;