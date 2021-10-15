const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema=new Schema(
    {
        nameCar:{
            type:String,
            required:true
        },
        imgCarUrl:{
            type:String,
            required:true
        },
        descriptionCar:{
            type:String,
            required:true
        },
        sizeCar:{
            type:String,
            required:true
        },
        weightCar:{
            type:String,
            required:true
        },
        indexCar:{
            type:String,
            required:true,
        },
        costCar:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps:true,
    }
)
module.exports=mongoose.model('products',ProductSchema);