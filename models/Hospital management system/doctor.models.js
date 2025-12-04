import mongoose, { mongo } from "mongoose"

doctor_Schema= new mongoose.Schema({},{timestamps:true})

export const doctors = mongoose.model("doctors",doctor_Schema)