const router = require('express').Router()
const userCtrl = require('../controllers/user.controller')
const kanbanCtrl = require('../controllers/kanban.controller')

router.route('/register')
    .post(userCtrl.create)

router.route('/user')
    .post(userCtrl.read)

router.route('/kanban')
    .post(kanbanCtrl.create)
    .get(kanbanCtrl.getAllKanban)

router.route('/updatekanban')
    .post(kanbanCtrl.update)

module.exports = router