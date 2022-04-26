var mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({

    Department_name: {type: String, required: true},
    status:{type: Boolean, default: true},
}, { timestamps: true })

module.exports = mongoose.model('Department',DepartmentSchema)

