
const transactionSchema=require('../Schema/transactionSchema')


const getAllTransactions=async(req,res)=>{


    try{

        const transactions=await transactionSchema.find()
        console.log(transactions)

        return res.send({
            status:200,
            data:transactions,
            message:'Featching Transactions sucessfully'

        })

    }catch(err){
        res.send({
            status:400,
            message:'Transactions Fetching Error',
            error:err.message
        })
    }
}

const getStatus=async(req,res)=>{

    const {custom_order_id}=req.params

    try{

        const status=await transactionSchema.find({ custom_order_id })

        if(!status){
return res.send({
    
        status: 404,
        message: 'No transactions found with the provided custom_order_id',
  
})
        }


        return res.send({
            status:200,
            message:'Sucessfully Fetched the Status Data',
            data:status
        })

    }catch(err){

        return res.send({
            status:400,
            message:'Error in Fetching Status',
            error:err.message
        })
    }

}

module.exports={getAllTransactions,getStatus}