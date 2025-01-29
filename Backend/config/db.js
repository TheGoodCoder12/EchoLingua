const mongoose=import('mongoose')
require('dotenv').config();

const connectDB=async () => {
    try {
        (await mongoose).connect(process.env.CONN_STRING)
        console.log("DB connected")
    } catch (error) {
        console.log("DB not connected",error)
        
    }
}

module.exports=connectDB