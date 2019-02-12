const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const validateSession = require('../middleware/validate-session');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// update user info
router.put('/:id', validateSession, (req, res) => {
    let reqUser = req.body.user;

    User.update({
        email: reqUser.email,
        screenname: reqUser.screenname,
        symbol: reqUser.symbol
    },
        {
            where: {
                id: req.params.id && req.user.id
            }
        })
        .then(
            updateSuccess = recordsChanged => {
                res.status(200).json(recordsChanged);
            },

            updateFail = err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
});

// get user info by id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(
            findSuccess = user => {
                console.log('user found');
                res.status(200).json(user);
            },

            findFail = err => {
                console.log(err);
                res.status(500).send(err)
            }
        )
});

// get all users
// router.get('/all', (req, res) => {
//     User.find({
//         where: {
//             id: {
//                 [Op.gte]: 1
//             }
//         }
//     })
//         .then(users => {
//             console.log(users)

//         }
//             // findSuccess = users => {
//             //     console.log('user found successfully');
//             //     res.status(200).json(users);
//             // },

//             // findFail = err => {
//             //     console.log(err);
//             //     res.status(500).send(err);
//             // }
//         )
// });

// delete account
router.delete('/:id', validateSession, (req, res) => {
    if(req.params.id != req.user.id) {
        return res.status(500).send("You can't delete an account that isn't yours");
    }

    let userId = req.user.id;

    User.destroy({
        where: {
            id: userId && req.params.id
        }
    })
    .then(
        deleteSuccess = recordsChanged => {
            res.status(200).json(recordsChanged);
        },

        deleteFail = err => {
            console.log(err);
            res.status(500).json(err);
        }
    )
});

module.exports = router;