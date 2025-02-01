import express from "express";
import cookie from "cookie-parser";
import cors from "cors";
import path from "path";
const app = express();

app.use(express.json({
    limit:"16kb"
}))

app.use(cookie({}))
app.use(cors({
    origin:process.env.ORIGINS  
}))

app.use ( express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static(path.join("public", "temp")));





