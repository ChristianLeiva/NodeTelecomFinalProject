const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
    username: String,
    comment: String
},
{
    timestamps: Date.now,
    versionKey: false
})
const Like = new mongoose.Schema({
    username: String,
},
{
    timestamps: Date.now,
    versionKey: false
})



const Article = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: false,
            trim: true
        },
        subtitle: {
            type: String,
            unique: false,
            trim: true
        },
        description: {
            type: String,
            unique: false,
            trim: true
        },
        image: {
            type: String,
            unique: false
        },
        userID: {
            type: String,
            unique: false
        },
        createdBy: {
            type: String,
            unique: false
        },
        comments: [Comment],
        likes: [Like]
    },
    {
        timestamps: Date.now,
        versionKey: false
    }
)


module.exports = mongoose.model("Articles", Article)