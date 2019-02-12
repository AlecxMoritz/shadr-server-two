const router = require('express').Router();
const Shade = require('../db').import('../models/shade');
const validateSession = require('../middleware/validate-session');

// get all shades
router.get('/all', validateSession, (req, res) => {
    Shade.findAll()
        .then(
            findSuccess = shades => {
                res.status(200).json(shades);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// get shades by user
router.get('/user/:id', validateSession, (req, res) => {
    Shade.findAll({
        where: {
            userId: req.params.id
        }
    })
        .then(
            findSuccess = shades => {
                res.status(200).json(shades);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// get shade by id
router.get('/:id', validateSession, (req, res) => {
    Shade.find({
        where: {
            id: req.params.id
        }
    })
        .then(
            findSuccess = shade => {
                res.status(200).json(shade);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// post shade
router.post('/', validateSession, (req, res) => {
    Shade.create({
        userId: req.user.id,
        text: req.body.shade.text,
        dislikes: 0,
    })
        .then(
            createSuccess = shade => {
                res.status(200).json(shade);
            },

            createFail = err => {
                console.log(err.message);
                res.status(500).json(err.message);
            }
        )
});

// edit shade
router.put('/:id', validateSession, (req, res) => {
    Shade.update({
        text: req.body.shade.text
    },
        {
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        })
        .then(
            updateSuccess = recordsChanged => {
                res.status(200).json(recordsChanged);
            },

            updateFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// flag shade
router.post('/flag/:id', validateSession, (req, res) => {
    Shade.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(foundShade => {
        let newFlags = foundShade.flags + 1;

        Shade.update({
            isFlagged: true,
            flags: newFlags
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(
                flagSuccess = recordsChanged => {
                    res.status(200).json(recordsChanged);
                },
    
                flagFail = err => {
                    console.log(err.message);
                    res.status(500).send(err.message);
                }
            )
    })
});

// delete shade
router.delete('/:id', validateSession, (req, res) => {
    Shade.destroy({
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    })
        .then(
            deleteSuccess = recordsChanged => {
                res.status(200).json(recordsChanged);
            },

            deleteFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

module.exports = router;