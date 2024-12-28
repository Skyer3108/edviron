const statusSchema=require('../Schema/statusSchema')



const getDeatils=async(req,res)=>{

    const {collect_id}=req.params
    console.log(collect_id)
    try{

        const details=await statusSchema.find({collect_id})


        return res.send({
            status:200,
            message:'Sucessfully Fetched the Status Data',
            data:details
        })

    }catch(err){

        return res.send({
            status:400,
            message:'Error in Fetching Status',
            error:err.message
        })
    }

}
module.exports={getDeatils}