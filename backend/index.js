import aws from "aws-sdk";
import multerS3 from "multer-s3";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/*
In this case, the `cors` middleware is being used to enable Cross-Origin Resource Sharing (CORS) in the application. CORS is a mechanism that allows resources (such as fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. 
By using `app.use(cors())`, the application is allowing requests from any domain to access its resources, which can be useful when building APIs or web applications that need to be accessed by clients from different domains.
*/ 
app.use(cors());

// this gives access to the public aws
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read', // files to be publicly accessible
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const baseName = path.basename(file.originalname, path.extname(file.originalname));

      // unique name so that files don't get overwritten
      const fileName = baseName + '-' + uniqueSuffix + path.extname(file.originalname);
      
      cb(null, fileName);
    }
  })
});

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
