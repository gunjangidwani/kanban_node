const User = require('../models/user.model')
const respCtrl = require('./response.controller')

exports.create = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err)
            res.json(respCtrl.response(false, err))
        if (user === null) {
            let user = new User
            user = Object.assign(user, req.body)
            user.save((err) => {
                if (err)
                    res.json(respCtrl.response(false, err))
                res.json(respCtrl.response(true, user))
            })
        } else {
            res.json()
        }
    })
}

exports.read = (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, user))
    })
}
