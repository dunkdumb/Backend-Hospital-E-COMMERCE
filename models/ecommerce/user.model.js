import { contains } from "cheerio"
import mongoose from "mongoose"
import { lowercase } from "zod/v4"

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true,
        lowercase: true
    },
    email : {
        type : String,
        required : true,
        unique: true,
        lowercase: true,
        contains:"@gmail.com"
    },
    passwords : {
        type : String,
        required : true,   
    }

    
},{timestamps : true})
export const user = mongoose.model("User",userSchema)
