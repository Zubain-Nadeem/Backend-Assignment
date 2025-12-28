const mongoose = require('mongoose');

const connectDB = async() => {
        try{
            await mongoose.connect(process.env.DB)
            console.log(`Mongo Db Connect Successfully`)
        }
        catch(err){
            console.log(`Mongo Db connect Failed ${err.message}`)
        }
}

module.exports = connectDB ;