import "reflect-metadata";
import { carCreateBodyListMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { prisma } from "../../database/prisma";

describe("Integration test: Get Many Cars.", () => {
  test("Get Many Cars should work correctly.", async () => {
    await prisma.car.createMany({data: carCreateBodyListMock});
    
    const data = await request
      .get("/api/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);
    expect(data[0].id).toBeDefined();
    carDefaultExpects(data[0], carCreateBodyListMock[0]);
    expect(data[1].id).toBeDefined();
    carDefaultExpects(data[1], carCreateBodyListMock[1]);
  });
});
