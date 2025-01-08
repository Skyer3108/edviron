const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {



   const { token } = req.headers
    // const token = req.headers.Authorization?.split(' ')[1];

    console.log(token)



    if (!token) {
        console.log('jjj', token)
        return res.send({
            message: 'Not Authorized Login Again'
        })
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = tokenDecode.id

        next()
    } catch (err) {
        console.log(err)
        res.send({
            message: err.message
        })
    }



}

module.exports = authMiddleware