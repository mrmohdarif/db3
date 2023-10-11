const express=require('express')
const app=express()
const router=require('./route')

app.use(express.json()) 
app.use("/api",router)

app.listen(4000,()=>{
    console.log("your are run");
})