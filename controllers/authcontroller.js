const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// sign up
router.post('/', (req, res) => {
    let reqUser = req.body.user;
    User.create({
        name: reqUser.name,
        email: reqUser.email,
        screenname: reqUser.screenname,
        passwordHash: bcrypt.hashSync(reqUser.password, 10),
        userDislikes: []
    })
        .then(
            createSuccess = user => {
                console.log('user signed up')
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({
                    user: user,
                    sessionToken: token
                })
            },

            createFail = err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
});

router.post('/login', (req, res) => {
    let reqUser = req.body.user
    User.findOne({
        where: {
            screenname: reqUser.screenname
        }
    })
    .then(user => {
        if(user) {
            bcrypt.compare(reqUser.password, user.passwordHash, (err, matches) => {
                if(matches) {
                    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                    res.status(200).json({
                        user: user,
                        sessionToken: token
                    })

                } else {
                    res.status(500).send('Screenname or password incorrect');
                }
            })
        } else {
            res.status(500).send('Screenname or password incorrect');
        }
    },
    
    findFail = err => {
        console.log(err);
        res.status(500).send('Screenname or password incorrect');
    })
});

module.exports = router;