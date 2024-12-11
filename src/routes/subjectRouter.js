import express from "express";
import { createsubject,deletesubject,editsubject,getbyIdSubject,getsubject } from "../controller/subjectController.js";

const router =express.Router();

router.post("/create",createsubject);
router.get("/getsub",getsubject);
router.get("/:id",getbyIdSubject);
router.put("/edit/:id",editsubject);
router.delete("/:id",deletesubject);


export default router;