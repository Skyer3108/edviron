const jwt = require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{



    const {token}=req.headers;

    if(!token){

        return res.send({
            message:'Not Authorized Login Again'
        })
    }

    try{

        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=tokenDecode.id

        next()
    }catch(err){
        res.send({
            message:err.message
        })
    }



}

module.exports=authMiddleware