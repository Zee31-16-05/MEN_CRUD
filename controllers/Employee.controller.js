// var express = require('express')

const Employee = require('../models/Employee.model')

exports.create = async (req, res) =>{

    const empData = new Employee({
    fname : req.body.fname,
    lname : req.body.lname,
    age : req.body.age
    
    })
    
    try{
        const employeeData = await empData.save()
        console.log(employeeData)
        res.status(201).json(employeeData)

    }
    catch(err){
        console.log("error ok",err.stack)
        res.status(500).json("error found")
    }
}

exports.get = async(req, res, next) =>{

    try{
        const getData = await Employee.find()
        console.log(getData)
        res.status(200).json("Employee list successfully", getData)

    }
    catch(err){
        console.log("error ok",err.stack)
        res.status(404).send("error found")
    }
}

exports.getById = async(req, res, next) =>{

    const _id = req.params.id
    try{
        const getDatabyId = await Employee.findById({_id})
        console.log(getDatabyId)
        res.status(200).json("Employee list successfully", getDatabyId)
    }
    catch(err){
        console.log("error ok",err.stack)
        res.status(404).send("error found")
    }
}

exports.update = async(req, res, next) =>{

    const UpdateempData = {
        "fname" : req.body.fname,
        "lname" : req.body.lname,
        "age" : req.body.age
        
        }
    const _id = req.params.id

    try{
        const updData = await Employee.findByIdAndUpdate(_id,UpdateempData)
        console.log("updating employee successfully",updData)
        res.status(200).json("successfully updated", updData)

    }
    catch(err){
        console.log("error ok",err.stack)
        res.status(404).send("error found")
    }
}

exports.delete = async(req, res, next) =>{
    const _id = req.params.id
    try{
        const empDelete = await Employee.findByIdAndUpdate(_id, {"status":false})
        console.log(empDelete)
        res.send("employee deleted successfully",empDelete)
    }
    catch(err){
        res.send("error found").status(500)
        console.log("error ok",err.stack)
    }
}