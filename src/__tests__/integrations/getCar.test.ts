import "reflect-metadata";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { prisma } from "../../database/prisma";

describe("Integration test: Get Many Cars.", () => {
  test("Get Many Cars should work correctly.", async () => {
    await prisma.car.create({data: carCreateBodyMock});
    
    const data = await request
      .get("/api/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toStrictEqual(carMock);
  });
});