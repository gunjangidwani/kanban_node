const mongoose = require('mongoose')

const kanbanSchema = mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    reporter: {
        type: String,
        required: true
    },
    task_stage: {
        type: String,
        required: true
    },
    task_created_on: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('kanban', kanbanSchema)