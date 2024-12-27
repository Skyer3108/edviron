const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('MONGODB SUCESSFULLY RUNNING')
}).catch((err)=>{
    console.log(`ERROR ${err}`)
})