import "reflect-metadata";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { prisma } from "../../database/prisma";


describe("Integration test: Update Car.", () => {
  test("Update Car should work correctly.", async () => {
    const car = await prisma.car.create({ data: carCreateBodyMock });

    const data = await request
      .patch(`/api/cars/${car.id}`)
      .send(carUpdateBodyMock)
      .expect(200)
      .then((response) => response.body);

    const newCar = { ...car, ...carUpdateBodyMock };

    expect(data).toStrictEqual(newCar);
  });

  test("Should throw error when Car is invalid.", async () => {
    const data = await request
       .patch("/api/cars/9a50562d-4ec3-459b-bfea-fcef4798832")
       .expect(404)
       .then((response) => response.body);
       
    expect(data.error).toStrictEqual("Car not found.");
 });
});
