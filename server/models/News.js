const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NewsSchema = new Schema(
    {
        titleNew:{
            type:String,
            required:true
        },
        contentNew:{
            type:String,
            required:true
        },
        imageNewUrl:{
            type:String
        },
        imageNewId:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
)
module.exports = mongoose.model('news',NewsSchema);