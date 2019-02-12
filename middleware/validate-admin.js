const jwt = require('jsonwebtoken');
const sequelize = require('../db')
var User = sequelize.import('../models/user');

module.exports = function (req, res, next) {
    var sessionToken = req.headers.authorization;

    jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
        if (decoded) {
            User.findOne({ where: { id: decoded.id } }).then(user => {
                if (user.isAdmin === true) {
                    next()
                } else {
                    res.status(401).send({ error: "not authorized" });
                }
            },
                function () {
                    res.status(401).send({ error: "not authorized" });
                })

        } else {
            res.status(400).send({ error: "not authorized" })
        }
    });
}