import "reflect-metadata";
import { CarService } from "../../services/CarService";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: Delete Car.", () => {
    test("Delete Car should work correctly.", async () => {
        const carService = new CarService();

        await carService.delete(carMock.id);
    });
});