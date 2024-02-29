import "reflect-metadata";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { prisma } from "../../database/prisma";

describe("Integration test: Delete Car.", () => {
  test("Delete Car should work correctly.", async () => {
    const car = await prisma.car.create({ data: carCreateBodyMock });

    await request.delete(`/api/cars/${car.id}`).expect(204);
  });

  test("Should throw error when Car is invalid.", async () => {
    const data = await request
      .delete("/api/cars/9a50562d-4ec3-459b-bfea-fcef4798832")
      .expect(404)
      .then((response) => response.body);

    expect(data.error).toStrictEqual("Car not found.");
  });
});
