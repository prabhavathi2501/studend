import express from "express";
import {createMark,getmark} from "../controller/markController.js"
import { reportCardGenerator } from "../utiles/reportGenarater.js";

const router=express.Router();

router.post("/create",createMark);
router.get("/getmark",getmark);
router.get("/report/:id",reportCardGenerator);

export default router