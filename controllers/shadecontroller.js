const router = require('express').Router();
const Shade = require('../db').import('../models/shade');

// get all shades
router.get('/all', (req, res) => {

});

// get shades by user
router.get('/user/:id', (req, res) => {
    
});

// get shade by id
router.get('/:id', (req, res) => {

});

// post shade
router.post('/', (req, res) => {

});

// edit shade
router.put('/:id', (req, res) => {

});

// flag shade
router.post('/flag/:id', (req, res) => {

});

// delete shade
router.delete('/:id', (req, res) => {

});

module.exports = router;