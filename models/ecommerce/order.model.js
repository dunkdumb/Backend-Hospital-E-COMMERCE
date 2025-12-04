import { MongoOIDCError } from "mongodb"
import mongoose, { mongo } from "mongoose"

const orderitemschema = new mongoose.Schema({
    productid:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity: {
        type : Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice: {
        required:true,
        type:Number,
    },
    customer:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderitems :{//iske andhar product aur quantity dono rehete 
        type : [orderitemschema]
    },
    address: {
        type: String,
        required : true,
    },
    status:{
        type : String,
        enum : ["Pending","Cancel","Delivered"],
        default : "PENDING"
    }
    
},{timestamps:true})

export const order = mongoose.model("orders",orderSchema)