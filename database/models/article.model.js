const mongoose = require('mongoose')

const Article = new mongoose.Schema(
    {
        title:{
            type: String,
            unique: false,
            trim: true
        },
        description:{
            type: String,
            unique: false,
            trim: true
        },
        data:{
            type: String,
            unique: false,
            trim: true
        },
        image:{
            type: String,
            unique: false
        },
        userID:{
            type: String,
            unique: false
        }
    },
    {
        timestamps: Date.now,
        versionKey: false
    }
)


module.exports = mongoose.model("Articles", Article)