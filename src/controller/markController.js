import MarksModel from "../model/mark.js";


export const createMark = async(req,res)=>{
    try {
        
        const marks=new MarksModel(req.body);
        await marks.save();
        res.status(201).json({
            message: "mark create successs"
        })
    } catch (error) {
        res.status(500).json({message:"internal server ",error:message.error})
    }
}

export const getmark=async(req,res)=>{
   try {
    const mark=await MarksModel.find().populate("student".name).populate("subject".name);
    res.status(201).json({
        messgae:"get marks",
        data:mark
    })
   } catch (error) {
    res.status(500).json({message:error.message})
    
   }
}