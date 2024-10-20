import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectionDb from "./db/config.js";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/user.routes.js";
import {errorMiddleware} from "./middleware/errorMiddleware.js"
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(cors({
  origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}))

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlencoded({extended:true}));
app.use(fileUpload({
  tempFileDir: "/tmp/",
  useTempFiles:true,
}))


app.use("/api/v1/user",userRoutes)
app.listen(port, () => {
  connectionDb();
  console.log(`Server is running on port: ${port}`);
});


app.use(errorMiddleware);
export default app;