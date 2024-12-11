import express from "express";
import { createStudent,deletestudent,editStudent,getStudent,getbyIyStudent } from "../controller/studentController.js";

const router =express.Router();

router.post("/create",createStudent);
router.get("/getstudent",getStudent);
router.get("/:id",getbyIyStudent);
router.put("/edit/:id",editStudent);
router.delete("/:id",deletestudent);



export default router;