import { NextFunction, Request, Response } from "express";
import { CarService } from "../services/CarService";

export class CarController {
    private carService = new CarService;

    public create = async ({body}: Request, res: Response, _next: NextFunction): Promise<Response> => {
        const car = await this.carService.create(body);
        return res.status(201).json(car);
    };

    public read = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
        const cars = await this.carService.read();
        return res.status(200).json(cars);
    };

    public retrieve = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
        const {foundResource} = res.locals;
        const car = await this.carService.retrieve(foundResource);
        return res.status(200).json(car);
    };

    public update = async ({body, params:{carId}}: Request, res: Response, _next: NextFunction): Promise<Response> => {
        const car = await this.carService.update(carId, body);
        return res.status(200).json(car);
    };

    public delete = async ({params:{carId}}: Request, res: Response, _next: NextFunction): Promise<Response> => {
        await this.carService.delete(carId);
        return res.status(204).json();
    };
}