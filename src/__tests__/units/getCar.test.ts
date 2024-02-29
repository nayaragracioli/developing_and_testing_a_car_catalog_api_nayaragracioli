import "reflect-metadata";
import { CarService } from "../../services/CarService";
import { carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Get Car.", () => {
    test("Get Car should work correctly.", async () => {
        const carService = new CarService();

        prismaMock.car.findFirst.mockResolvedValue(carMock);
        

        const data = await carService.retrieve(carMock);


        expect(data).toStrictEqual(carMock);
    });
});

