const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 8001
const hostname = 'localhost'
const EmployeeRouter = require('./routes/Employee.route')
const DepartmentRouter = require('./routes/Department.route')
app.use(express.json()) //apan express ko bol rahe h k tu bhai json format ko read kar yaha se.

app.use('/employee/',EmployeeRouter)  //ye apan ne connect kiya route file ko server.js file se
app.use('/department/',DepartmentRouter) //ye apan ne connect kiya route


mongoose.connect('mongodb://localhost:27017/perfectSolution', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("successfully connected to database"))
.catch((err)=> console.log("could not connect to database",err))

app.listen(PORT,()=>{
    console.log(`listening on ${hostname}: ${PORT}`)
})