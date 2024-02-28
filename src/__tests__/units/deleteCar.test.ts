import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services/CarService";
import { carCreateBodyMock } from "../__mocks__/car.mock";

describe("Unit test: Delete Car.", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("Delete Car should work correctly.", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});
        
        const carService = new CarService;

        await carService.delete(car.id);
    });
});