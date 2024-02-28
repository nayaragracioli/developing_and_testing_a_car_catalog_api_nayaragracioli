import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

export class HandleErrors{
    public static execute = (error: Error, _req: Request, res: Response, _next: NextFunction): Response => {
        if(error instanceof AppError){
            return res.status(error.status).json({error: error.message});
        }
        
        if(error instanceof ZodError){
            return res.status(400).json({error: error.errors});
        }
        
        
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }
};

// export const handleErrors = new HandleErrors();
