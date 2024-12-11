import mongoose from "mongoose";


const studendSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    rollNumber:{
        type:String,
        require:true,
        unique:true
    }


})

const Student = mongoose.model("student",studendSchema);

export default Student