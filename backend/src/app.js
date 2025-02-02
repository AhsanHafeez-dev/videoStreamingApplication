import express from "express";
import cookie from "cookie-parser";
import cors from "cors";
import path from "path";
export const app = express();

app.use(express.json({
    limit:"16kb"
}))

app.use(cookie({}))
app.use(cors({
    origin:process.env.ORIGINS  
}))

app.use ( express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static(path.join("public", "temp")));


import {logger} from "./utils/logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);









app.get("/", (req, res) => {
    logger.info("This is an info message");
    logger.error("This is an error message");
    logger.warn("This is a warning message");
    logger.debug("This is a debug message");
    return res.status(200).json({ name: "ahsan" });
}
)




