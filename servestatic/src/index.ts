import express from "express";
import connectDB from "./connectDB";
import {errorHandler} from "./error.handler";
import authMiddleware from "./auth.middleware";
import cookieParser from 'cookie-parser';

const runApp = () => {
    const app = express();

    app.use(cookieParser());

    // app.use('/results/pv/analysis', authMiddleware, express.static('/pv/analysis', {index: false}));
    app.use('/results/pv/analysis', express.static('/pv/analysis', {index: false}));

    app.use(errorHandler);

    const server = app.listen(3000, () => {
        console.log("Serve Static");
        console.log("Listening on 3000");
    });

    //Handle unhandled promise rejections
    // process.on("unhandledRejection", (err: any, promise) => {
    //     console.log(`Error: ${err.message}`);
    //
    //     //Close server and exit process
    //     server.close();
    //
    //     server.close(() => process.exit(1));
    // });
}

connectDB().then(() => {
    runApp();
}).catch(() => {
    console.log("Connect to DB failed. Application failed to start");
})