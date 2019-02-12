const router = require('express').Router();
const validateAdmin = require('../middleware/validate-admin');
const User = require('../db').import('../models/user');

// delete any user
router.delete('/:id', validateAdmin, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
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
})


module.exports = router;