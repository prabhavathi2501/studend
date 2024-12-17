import MarkModel from "../model/mark.js";
import StudentModel from "../model/student.js";
import SubjectModel from "../model/subject.js";



//http://localhost:5004/mark/report/:id
export const reportCardGenerator = async (req, res) => {
    try {
        
        const studentId = req.params.id;
        //check if student exists
        const student = await StudentModel.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        //fetch marks for student
        const marks = await MarkModel.find({ student: studentId })
        console.log(marks);
        if(!marks.length){
            return res.status(404).json({ message: "Marks not found" });
        }

        //calculate total marks and pass/fail
        const totalMarks = marks.reduce((acc, mark) => acc + mark.marks, 0);
        const pass = marks.every((mark) => mark.marks >= 50);

        //generate report card
        res.status(200).json({
            message: "Report card generated successfully",
            student:{
                id: student._id,
                name: student.name,
                rollNumber: student.rollNumber,
            },
            subjects: marks.map((mark) => ({
                subject: mark.subject.name,
                marks: mark.marks,
            })),
            totalMarks,
            status: pass ? "Pass" : "Fail",
           
        })

    } catch (error) {
        res.status(400).json({ message: error.message });   

    }
}