import "reflect-metadata";
import { CarService } from "../../services/CarService";
import { carUpdateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Update Car.", () => {
    test("Update Car should work correctly.", async () => {
        const carService = new CarService();
        
        const newCarExpect = {...carMock, ...carUpdateBodyMock};
        
        prismaMock.car.update.mockResolvedValue(newCarExpect);
        const data = await carService.update(carMock.id, carUpdateBodyMock);


        expect(data).toStrictEqual(newCarExpect);
    });
});