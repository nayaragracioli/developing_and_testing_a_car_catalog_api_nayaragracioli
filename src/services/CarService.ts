import { Car } from "@prisma/client";
import { TCarCreate, TCarReturn, TCarUpdate } from "../interfaces/car.interface";
import { carReturnSchema } from "../schemas/car.schema";
import { prisma } from "../database/database";

export class CarService {
    public create = async (payload: TCarCreate): Promise<TCarReturn> => {
        return carReturnSchema.parse(await prisma.car.create({data: payload}));
    };

    public read = async (): Promise<TCarReturn[]> => {
        return carReturnSchema.array().parse(await prisma.car.findMany());
    };

    public retrieve = async (foundResource: Car): Promise<TCarReturn> => {
        return carReturnSchema.parse(foundResource);
    };

    public update = async (carId: string, payload: TCarUpdate): Promise<TCarReturn> => {
        const updateCar = await prisma.car.update({
            data: payload,
            where: { id: carId },
          });
          
        return updateCar as TCarReturn;
    };

    public delete = async (carId: string ): Promise<void> => {
        await prisma.car.delete({where: {id: carId}});
    };
}