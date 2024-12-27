const express=require('express')
const { getAllStatus, getDeatils } = require('../Controllers/statusController')

const statusRoute=express.Router()


statusRoute.get('/status/:collect_id',getDeatils)
module.exports=statusRoute