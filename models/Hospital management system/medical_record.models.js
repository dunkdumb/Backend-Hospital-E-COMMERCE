import mongoose, { mongo } from "mongoose"

const medical_Record_Schema= new mongoose.Schema({},{timestamps:true})

export const medical_Records = mongoose.model("MedicalRecords",medical_Record_Schema)