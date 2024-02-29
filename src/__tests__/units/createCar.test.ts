import "reflect-metadata";
import { CarService } from "../../services/CarService";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Create Car.", () => {
    test("Create Car should work correctly.", async () => {
        const carService = new CarService();

        prismaMock.car.create.mockResolvedValue(carMock);
        const data = await carService.create(carCreateBodyMock);

        expect(data).toStrictEqual(carMock);
    });
});