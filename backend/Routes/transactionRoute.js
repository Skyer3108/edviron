const express=require('express')
const { getAllTransactions, getStatus } = require('../Controllers/transationController')
const authMiddleware = require('../middleware/authMiddle')

const transactionRouter=express.Router()


transactionRouter.get('/get-all-transactions',getAllTransactions)
transactionRouter.get('/get/tranaction-status/:custom_order_id',authMiddleware,getStatus)

module.exports=transactionRouter