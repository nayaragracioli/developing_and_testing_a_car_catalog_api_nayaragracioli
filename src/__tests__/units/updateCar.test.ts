import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services/CarService";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mock";

describe("Unit test: Update Car.", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("Update Car should work correctly.", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const carService = new CarService;

        const data = await carService.update(car.id, carUpdateBodyMock);

        const newCarExpect = {...car, ...carUpdateBodyMock};

        expect(data).toStrictEqual(newCarExpect);
    });
});