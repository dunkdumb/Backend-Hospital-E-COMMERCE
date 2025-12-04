import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
            type : String,
            required : true,
            unique: true,
            lowercase: true
    }
},{timestamps :true})


export const category = mongoose.model("Category",categorySchema)