import SubjectModel from "../model/subject.js";



export const createsubject = async (req, res) => {
    try {
        const subject = new SubjectModel(req.body);

        await subject.save();
        res.status(201).json({ message: "subject create susscessfully", data: subject })

    } catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message })
    }
}


export const getsubject = async (req, res) => {
    try {
        const subject = await SubjectModel.find();
        res.status(200).json({
            message: "get all subject datails",
            data: subject
        })
    } catch (error) {
        res.status(500).json({ messgae: " internalserver error", error: error.message })
    }
}


export const getbyIdSubject = async (req, res) => {
    try {
        const subjectId = req.params.id;
        if (subjectId) {
            let subject = await SubjectModel.findById(subjectId)
            res.status(201).send({ message: "get subject id success", subject })
        }
        else {
            res.status(404).send({ message: "id not found" })
        }

    } catch (error) {
        res.status(500).send({ message: "internal sever error" })
    }
}

export const editsubject = async (req, res) => {
    try {
        const subjectId = req.params.id;
        if (subjectId) {
            const { name } = req.body;
            let subject = await SubjectModel.findById(subjectId)
            subject.name = name
            await subject.save();
            res.status(201).send({ message: "edited success" })
        }
        else {
            res.status(404).send({ message: "id not found" })
        }

    } catch (error) {
        res.status(500).send({ message: "internal sever error" })
    }

}

export const deletesubject = async (req, res) => {
    try {
        const subjectId = req.params.id;
        if (subjectId) {
            await SubjectModel.findByIdAndDelete(subjectId)
            res.status(201).send({ message: "deleted suceess" })
        }
        else {
            res.status(404).send({ message: "id not found" })
        }
    } catch (error) {
        res.status(500).send({ message: "internal sever error" })
    }

}