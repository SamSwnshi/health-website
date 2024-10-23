import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectionDb from "./db/config.js";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import {errorMiddleware} from "./middleware/errorMiddleware.js";
import cloudinary from "cloudinary";
const app = express();
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


const port = process.env.PORT || 8000;

app.use(cors({
  origin: process.env.FRONTEND_URL, //'http://localhost:5173'
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
}));



app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlencoded({extended:true}));
app.use(fileUpload({
  tempFileDir: "/tmp/",
  useTempFiles:true,
}))


app.use("/api/v1/user",userRoutes)
app.use("/api/v1/message",messageRoutes)
app.use("/api/v1/appointments", appointmentRoutes);

app.listen(port, () => {
  connectionDb();
  console.log(`Server is running on port: ${port}`);
});


app.use(errorMiddleware);
export default app;