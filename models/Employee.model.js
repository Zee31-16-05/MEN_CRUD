const mongoose = require('mongoose')






const EmployeeSchema = mongoose.Schema({  //schema define kar rahe hai.

    fname : {type: String,required: true, minLength: ['15', 'must be 15, got only {value}'], maxLength:30},
    lname : {type: String,required: true, minLength:['15', 'must be 15, got only {value}'], maxLength:30},
    age : {type: Number, minLength: ['18', 'must be 18, got only {value}']},
    department_id : {type: mongoose.Schema.Types.ObjectId,required: true, ref : 'Department'},
    status : {type: Boolean, default: true},
    // created_at : {type: Date, default: Date.now()},
}, { timestamps: true })

module.exports = mongoose.model('Employee',EmployeeSchema) //yaha model bana rahe hai.