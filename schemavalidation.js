const mongoose=require('mongoose')

const employee=mongoose.Schema({
  
    name: String,
    salary: Number,
    experience: Number,
    Yeargrad: Number,
    lastCompany: String,
})
const model=mongoose.model("employee",employee)
module.exports=model
