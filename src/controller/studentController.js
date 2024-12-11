import StudentModel from "../model/student.js";

//http://localhost:5004/student/create
export const createStudent = async (req, res) => {
    try {

        const student = new StudentModel(req.body);
        await student.save();

        res.status(201).json({ messgae: " student created sucessfully", data: student })
    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message })

    }
}


//http://localhost:5004/student/getstudent
export const getStudent = async (req, res) => {
    try {
        const studend = await StudentModel.find();
        res.status(200).json({ message: "get studend all detais ", data: studend })
    

    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message })
    }
}


//http://localhost:5004/student/:id
export const getbyIyStudent = async (req, res) => {
    try {
        const studentId = req.params.id;

        if (studentId) {
            const studentId = await StudentModel.findById(req.params.id)
            res.status(201).send({
                message: "student id feched",
               
                studentId
               
            })
        }
        else {
            res.status(400).send({ message: "id not found" })
        }

    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message })
    }
}


//http://localhost:5004/student/edit/:id
export const editStudent = async (req, res) => {
    try {
        const studentedit = req.params.id;
       
        if (studentedit) {
            console.log(studentedit)
            const { name, age, rollNumber } = req.body;
            let student = await StudentModel.findById(studentedit)
            student.name = name,
                student.age = age,
                student.rollNumber = rollNumber

            await student.save();
            res.status(201).send({ message: "student data edited success" })
        }
        else {
            res.status(400).send({ message: "id not found" })
        }

    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message })
    }


}


//http://localhost:5004/student/:id
export const deletestudent= async(req,res)=>{
    try {

        const studentdel=req.params.id
        if(studentdel){
           await StudentModel.findByIdAndDelete(studentdel)
            res.status(201).send({message:"student deleted"})
        }
        else{
            res.status(400).send({ message: "id not found" })

        }
        
    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message }) 
    }
}