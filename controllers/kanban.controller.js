const Kanban = require('../models/kanban.model')
const ObjectId = require('mongodb').ObjectID;
const respCtrl = require('./response.controller')

exports.create = (req, res) => {
    let kanban = new Kanban
    kanban = Object.assign(kanban, req.body)
    kanban.save((err) => {
        if(err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, kanban))
        
    })
}

exports.getAllKanban = (req, res) => {
    Kanban.find({}, (err, data) => {
        if(err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, data))
    })
}

exports.update = (req, res) => {
    Kanban.update({"_id": ObjectId(req.body.id)}, {$set: {task_stage: req.body.task_stage}}, (err, data) => {
        if(err)
            res.json(respCtrl.response(false, err))
        // res.json(respCtrl.response(true, data))
        Kanban.find({}, (err, data) => {
            if(err)
                res.json(respCtrl.response(false, err))
            res.json(respCtrl.response(true, data))
        })
    })
}