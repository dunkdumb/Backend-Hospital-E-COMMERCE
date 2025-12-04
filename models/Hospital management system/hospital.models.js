import mongoose, { mongo } from "mongoose"

hospital_Schema= new mongoose.Schema({},{timestamps:true})

export const hospital = mongoose.model("hospital",hospital_Schema)