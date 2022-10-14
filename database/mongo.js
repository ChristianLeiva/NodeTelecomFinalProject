const mongoose = require('mongoose');
require('dotenv').config()

const dbConect = () =>{
    const DB_URI = process.env.DB_API;
    mongoose.connect(
        DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (error, res) =>{
            if(!error){
                console.log(" *** Established connection *** ")
            }else{
                console.log(" *** Connection error *** ")
            }
        }
    )


}

module.exports = dbConect