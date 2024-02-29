import "reflect-metadata";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { prisma } from "../../database/prisma";

describe("Integration test: Get Many Cars.", () => {
  test("Get Many Cars should work correctly.", async () => {
    const car = await prisma.car.create({ data: carCreateBodyMock });

    const data = await request
      .get(`/api/cars/${car.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(data).toStrictEqual(car);
  });

  test("Should throw error when Car is invalid.", async () => {
    const data = await request
       .get("/api/cars/9a50562d-4ec3-459b-bfea-fcef4798832")
       .expect(404)
       .then((response) => response.body);
       
    expect(data.error).toStrictEqual("Car not found.");
 });
});
