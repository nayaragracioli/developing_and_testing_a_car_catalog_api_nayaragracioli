import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services/CarService";
import { carDefaultExpects } from "../../utils/carDefaultExpects";
import { carCreateBodyListMock } from "../__mocks__/car.mock";

describe("Unit test: Get Many Cars.", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("Get Many Cars should work correctly.", async () => {
        await prisma.car.createMany({data: carCreateBodyListMock});
        
        const carService = new CarService;

        const data = await carService.read();

        expect(data).toHaveLength(carCreateBodyListMock.length);
        carDefaultExpects(data[0], carCreateBodyListMock[0]);
        carDefaultExpects(data[1], carCreateBodyListMock[1]);
    });
});