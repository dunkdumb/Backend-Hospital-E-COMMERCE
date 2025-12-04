import mongoose, { mongo } from "mongoose"
import { required } from "zod/v4-mini"

hospital_Schema= new mongoose.Schema({
    name : {
        type :String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    no_of_doctors:{

    },
    specialized_in:[
        {
            type:String
        }
    ]
},{timestamps:true})

export const hospital = mongoose.model("hospital",hospital_Schema)