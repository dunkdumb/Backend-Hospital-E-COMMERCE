import mongoose, { mongo } from "mongoose"
import { required } from "zod/v4-mini"

patient_Schema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    diagnosedWith:{
        type : String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true,
        enum:[
            "A positive (A+)",
            "A negative (A-)",
            "B negative (B-)",
            "AB positive (AB+)",
            "AB negative (AB-)",
            "O positive (O+)",
            "O negative (O-)"
        ],
        default:["B positive (B+)"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
        default:["Others"]
    },
    admittedin:{
        type:mongoose.Schema.Types.ObjectId,
        reference:"hospital"
    },
    photo:{
        type:String,
        required:true
    }
},{timestamps:true})

export const patient = mongoose.model("patient",patient_Schema)