import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services/CarService";
import { carDefaultExpects } from "../../utils/carDefaultExpects";
import { carCreateBodyMock } from "../__mocks__/car.mock";

describe("Unit test: Create Car.", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("Create Car should work correctly.", async () => {
        const carService = new CarService;

        const data = await carService.create(carCreateBodyMock);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, carCreateBodyMock);
    });
});