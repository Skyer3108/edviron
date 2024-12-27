const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()

const db=require('./db')
const userRouter = require('./Routes/userRouter')
const transactionRouter = require('./Routes/transactionRoute')
const statusRoute = require('./Routes/statusRoute')
const PORT=4004;

app.use(cors());
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/transaction',transactionRouter)
app.use('/api/details',statusRoute)
app.get('/',(req,res)=>{

    res.send({
        message:'HELLO'
    })
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})