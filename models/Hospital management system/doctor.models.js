import mongoose, { mongo } from "mongoose"
import { required } from "zod/v4-mini"

doctor_Schema= new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    workingin_hospitals:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    },
    salary :{
        type:Number,
        required:false
    },
    specialization:{
        type:String,
        enum:["Cardiology", "Dermatology", "Neurology", "Endocrinology", "Gastroenterology", "Pediatrics", "Oncology", "Orthopedics"] ,
        default :["general surgeon"] 
    },
    qualification:{
        type :String,
        enum:[
                "NEET-UG" ,
                "MBBS" ,
                "Medical Registration" ,
                "NEET-PG"  ,
                "MD",
            ],
        default:["lab technician"]
    }

    
},{timestamps:true})

export const doctors = mongoose.model("doctors",doctor_Schema)