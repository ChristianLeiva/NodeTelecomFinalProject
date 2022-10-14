const mongoose = require('mongoose')

const User = new mongoose.Schema({
        username :{
            type: String,
            unique: true,
            trim: true
        },
        name: {
            type: String,
            unique: false,
            trim: true
        },
        email:{
            type: String,
            unique: true,
            trim: true
        },
        password:{
            type: String,
            unique: false,
            trim: true
        },
        followers:{
            type: Number
        },
        following:{

        }
    },
    {
        timestamps: false,
        versionKey: false
    }
)

module.exports = mongoose.model("Users", User)