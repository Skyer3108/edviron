const express=require('express')
const { getAllStatus, getDeatils } = require('../Controllers/statusController')
const authMiddleware = require('../middleware/authMiddle')

const statusRoute=express.Router()


statusRoute.get('/status/:collect_id',authMiddleware,getDeatils)
module.exports=statusRoute