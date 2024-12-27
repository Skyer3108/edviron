
const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    collect_id:{
        type:String,
        requried:true
    },
    status:{
        type:String,
        required:true
    },
    order_amount:{
        type:String,
        required:true,
    },
    transaction_amount:{
        type:String,
        required:true,
    },
    gateway:{
        type:String,
    required:true},
    
    custom_order_id:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('transactions',transactionSchema)