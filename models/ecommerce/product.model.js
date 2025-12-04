import mongoose from "mongoose"
import { required } from "zod/v4-mini"

const productSchema = new mongoose.Schema({
    description : {
        required:true,
        type:String
    },
    name : {
        required : true,
        type : String
    },
    productImage : {
        type:String
    },
    price : {
        type : Number,
        default : 0
    },
    stock : {
        default : 0,
        type : Number
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    Ownership : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "User"
    }
},{timestamps:true})

export const product = mongoose.model("products",productSchema)