import "reflect-metadata";
import { CarService } from "../../services/CarService";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { carListMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Get Many Cars.", () => {
    test("Get Many Cars should work correctly.", async () => {
        prismaMock.car.findMany.mockResolvedValue(carListMock);
        
        const carService = new CarService;

        const data = await carService.read();

        expect(data).toHaveLength(carListMock.length);
        carDefaultExpects(data[0], carListMock[0]);
        carDefaultExpects(data[1], carListMock[1]);
    });
});