import { NextFunction, Request, Response } from "express";
import { CarService } from "../services/CarService";

export class CarController {
    private carService = new CarService;

    public create = async (req: Request, res: Response, next: NextFunction): Promise<Response>{
        return res.status(201).json();
    };

    public read = async (req: Request, res: Response, next: NextFunction): Promise<Response>{
        return res.status(201).json();
    };

    public retrieve = async (req: Request, res: Response, next: NextFunction): Promise<Response>{
        return res.status(201).json();
    };

    public update = async (req: Request, res: Response, next: NextFunction): Promise<Response>{
        return res.status(201).json();
    };

    public delete = async (req: Request, res: Response, next: NextFunction): Promise<Response>{
        return res.status(201).json();
    };
}