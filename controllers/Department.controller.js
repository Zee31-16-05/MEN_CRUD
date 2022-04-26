
const Department = require('../models/Department.model')

exports.get = async(req, res, next) =>{

    try{
        const department = await Department.find()
        console.log(department)
        res.status(200).json(department)
    }
    catch(err){
        console.log("here is the error", err)
        res.status(404).send("error found")
    }
}

exports.getbyID = async(req, res, next) =>{

    const _id = req.params.id
    try{
        const DepId = await Department.findById({_id})
        console.log(DepId)
        res.status(200).json(DepId)
    }
    catch(err){
        console.log("here is the error", err)
    }
}

exports.create = async(req, res, next)=>{

    console.log(req.body);
    const DepData = new Department({
        Department_name: req.body.Department_name,
    });

    try{
        const DepCreate = await DepData.save()
        console.log(DepData)
        res.status(200).json(DepCreate)
    }
    catch(err){
        console.log("here is the error", err)
        res.status(404).send("error found")

    }
}

exports.update = async(req, res, next)=>{ //update hua bhai ek no bass ye jab object tha tab update q nai ho raha tha??  bcoz tum NEW object bana rhe the... apne ko existing ko update krna tha isliye.. NEW kab krte hai jab new entity banaate hai and then uspe save() mehtod call hota hai...acha okk bhai mtlb sirf create mein  hi vo new banega right?  right.. okk bhai thankyouu soooo soooo sooo sooo sooo  much bhai time nikal k aane k liye  most welcome yaar.. kal ke liye ATB... shukriya bhai allah hafiz allah hafiz

    const DepData = {
        Department_name: req.body.Department_name,
        Dep_status: req.body.Dep_status
    }
    const _id = req.params.id

    try{
        const updDepartdata = await Department.findByIdAndUpdate(_id,DepData)  // becase wo already ek object tha.. isliye i removed braces acha okk got it
        console.log("data updated",updDepartdata)
        res.status(200).json(updDepartdata)

    }
    catch(err){
        console.log("error ok",err.stack)
        res.status(404).send("error found")
    }
}

exports.delete = async(req, res, next) =>{
    const _id = req.params.id
    try{
        const Depdelete = await Department.findByIdAndUpdate(_id, {status:false})
        res.status(200).json(Depdelete)
    }
    catch(err){
        console.log("here is the error", err)
        res.status(404).json("error found")
    }

}