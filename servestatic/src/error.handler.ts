import {ErrorResponse} from "./error.response";
import {Request, NextFunction, Response} from "express";


export const errorHandler = (err: any, req: any, res: any, next: any) => {
    //    Log to console for the developer
    // console.log(err);

    res.redirect('https://www.spgwas.waslitbre.org');

    // res
    // .status(err.statusCode || 500)
    // .json({ success: false, error: err.errorName || "Server Error", message: err.message || "Internal Server Error" });
};