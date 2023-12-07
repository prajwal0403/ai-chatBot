import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
app.use(cors({
    origin: ["https://ai-chat-bot-frontend-rautprajwal546-gmailcom.vercel.app", "https://ai-chat-bot-frontend-git-main-rautprajwal546-gmailcom.vercel.app", "https://ai-chat-bot-frontend-ds7hepwjd-rautprajwal546-gmailcom.vercel.app"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true,
    // preflightContinue: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});

export default app;
