import mongoose from "mongoose";


const subjectSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }

})

const Subject =new mongoose.model("subject",subjectSchema);

export default Subject