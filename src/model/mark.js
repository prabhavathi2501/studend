import mongoose from"mongoose"
import Subject from "./subject.js";
import Student from "./student.js";



const markSchema = new mongoose.Schema({
    marks:{
        type:Number,
        require:true
    },
    subject:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String,
        // ref:"Subject",
        require:true


    },
    student:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String,
        // ref:"Student",
        require:true

    }

});


const Marks = new mongoose.model("marks",markSchema);

export default Marks