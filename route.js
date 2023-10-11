const {insertData,fetchData,range,exp,Update_salary,delete_data,gra_year}=require("./controler/student")

const router=require("express").Router()
router.post('/insertData',insertData)
router.get('/fetchData',fetchData)
router.get('/range',range) 
router.get('/exp',exp)  
router.get('/gra_year',gra_year)  
router.get('/Update_salary',Update_salary)  
router.get('/delete_data',delete_data)  
module.exports=router