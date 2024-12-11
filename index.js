import express from "express"
import cors from "cors";
import dotenv from"dotenv"
import connectDB from "./dataBase/config.js";
import studentRouter from "./src/routes/studentRouter.js"
import markRouter from "./src/routes/markRouter.js"
import subjectRouter from "./src/routes/subjectRouter.js"


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const port = process.env.PORT || 4000

app.get("/",(req,res)=>{
   res.send("welcome our student project report")
})



app.use("/student",studentRouter);
app.use("/mark",markRouter);
app.use("/sub",subjectRouter);


app.listen(port,()=>{
    console.log("app start")
})