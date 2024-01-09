import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";
const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use(express.static("public"));

// routes

import userRouter from "./routes/user.routes.js";

// routes decleration
app.use("/api/v1/users", userRouter);

export { app };
