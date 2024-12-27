const mongoose=require('mongoose')

const statusSchema=new mongoose.Schema({

    collect_id:{
        type:String,
        requried:true,
    },
    status:{
        type:String,
        required:true,
    },
    payment:{
        type:String,
        required:true,
    },
    gateway:{
        type:String,
        required:true,
    }, transactior:{
        type:String,
        required:true,
    }, ban_refrence:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('status',statusSchema)