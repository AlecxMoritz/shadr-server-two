const router = require('express').Router();
const Dislike = require('../db').import('../models/dislike');
const validateSession = require('../middleware/validate-session');

// get dislikes by user id
router.get('/user/:id', (req, res) => {
    Dislike.findAll({
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

// get by id
router.get('/:id', validateSession, (req, res) => {
    Dislike.findById(req.params.id)
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

// add dislike
router.post('/:id', validateSession, (req, res) => {
    Dislike.create({
        userId: req.user.id,
        shade_id: req.params.id
    })
    .then(
        dislikeSuccess = dislike => {
            res.status(200).json(dislike);
        },

        dislikeFail = err => {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    )
});

// remove dislike
router.delete('/:id', validateSession, (req, res) => {
    Dislike.destroy({
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